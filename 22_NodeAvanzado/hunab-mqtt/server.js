'use strict'

const debug = require('debug')('hunab:mqtt');
const mosca = require('mosca');
const redis = require('redis');
const chalk = require('chalk');
const db = require('hunab-db');	// Para instalarlo  npm i ../hunab-db/

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
});

server.on('published', (packet, client) => {
	debug(`Recived: ${packet.topic}`);
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

process.on('uncaughtException', handlerFatalError);	// Cuando se lanzó una excepción que no fue manejada
process.on('unhandledRejection', handlerFatalError); // Cuando no manejo promesas	