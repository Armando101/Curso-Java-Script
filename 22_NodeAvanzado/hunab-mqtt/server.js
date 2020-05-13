'use strict'

const debug = require('debug')('hunab:mqtt');
const mosca = require('mosca');
const redis = require('redis');
const chalk = require('chalk');

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

// Instanciamos el servidor
const server = new mosca.Server(settings)

// Este objeto es un event emitter
// Puedo agregar funciones o listener cuando el servidor me lanze ciertos eventos

// Para el evento ready
server.on('ready', ()=> {
	console.log(`${chalk.green('[hunab-mqtt]')} server is running`)
});