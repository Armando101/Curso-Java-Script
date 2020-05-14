'use strict'

const debug = require('debug')('hunab:mqtt');
const mosca = require('mosca');
const redis = require('redis');
const chalk = require('chalk');
const db = require('hunab-db');	// Para instalarlo  npm i ../hunab-db/

const { parsePayload } = require('./util');

// Configuración del backend
// Usaremos redis para el back
const backend = {
	type: 'redis',
	redis,	// Instancia de redis
	return_buffers: true // Para que redis retorne los buffers, esto por performance ya que en buffers la información viene en binario y es más fácil de procesar
}

const settings = {
	port: 1883,
	backend
}

const config = {
    database: process.env.DB_NAME || 'hunab',
    username: process.env.DB_USER || 'armando',
    password: process.env.DB_PASS || 'armando',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
}

const clients = new Map();

let Agent, Metric;

// Instanciamos el servidor
const server = new mosca.Server(settings)

// Este objeto es un event emitter
// Puedo agregar funciones o listener cuando el servidor me lanze ciertos eventos

// ATENCION:
// Instalamos mqtt de manera global
// `sudo npm i -g mqtt`
// Para asegurarnos de que está instalado correctamente lanzar: mqtt
// Correr el servidor
// Ahora podemos mandar un mensaje:
// `mqtt pub -t 'agent/message' -h localhost -m '{"Hello": "Hunab"}'`

server.on('clientConnected', client => {
	debug(`Client Connected: ${client.id}`);
});

server.on('clientDisconnected', client => {
	debug(`Client Disconnected: ${client.id}`);
	clients.set(client.id, null);	// Indico que un cliente se conecto
});

server.on('published', async (packet, client) => {
	debug(`Recived: ${packet.topic}`);

	switch (packet.topic) {
		case 'agent/Connected':
		case 'agent/disconnected':
			debug(`Payload: ${packet.payload}`)
			break
		case 'agent/message':
			debug(`Payload: ${packet.payload}`);
			const payload = parsePayload(packet.payload);

			if (payload) {
				payload.agent.connected = true;

				let  agent;
				// Si me llega un agente con información incorrecta se ignora
				try {
					agent = await Agent.createOrUpdate(payload.agent);
				} catch (e) {
					return handlerError(e);
				}

				debug(`Agent ${agent.uuid} saved`);

				// Notiy Agent is Connected
				if (!clients.get(client.id)) {
					clients.set(client.id, agent);
					server.published({
						topic: 'agent/connected',
						payload: JSON.stringify({
							agent: {
								uuid: agent.uuid,
								name: agent.name,
								hostname: agent.hostname,
								pid: agent.pid,
								connected: agent.connected
							}
						})
					})
				}

			}
			break;
	}

	debug(`Payload: ${packet.payload}`);
});

// Para el evento ready
server.on('ready', async ()=> {
	// Instanciamos los servicios
	const services = await db(config).catch(handlerFatalError);

	Agent = services.Agent;
	Metric = services.Metric;
	console.log(`${chalk.green('[hunab-mqtt]')} server is running`)
});

server.on('error', handlerFatalError);

function handlerFatalError(err) {
	console.error(`${chalk.red('[fatal error]')} ${err.message}`);
	console.error(err.stack);
	process.exit(1);
}

function handlerError(err) {
	console.error(`${chalk.red('[error]')} ${err.message}`);
	console.error(err.stack);
}

process.on('uncaughtException', handlerFatalError);	// Cuando se lanzó una excepción que no fue manejada
process.on('unhandledRejection', handlerFatalError); // Cuando no manejo promesas	