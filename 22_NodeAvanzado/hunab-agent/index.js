'use strict'

const debug = require('debug')('hubab:agent');
const mqtt = require('mqtt');
const defaults = require('defaults');
const EventEmitter = require('events');
const uuid = require('uuid');
const { parsePayload } = require('../hunab-mqtt/util.js');

const options = {
	name: 'untitled',
	username: 'armando',
	interval: 5000,
	mqtt: {
		host: 'mqtt://localhost'
	}
}

class HunabAgent extends EventEmitter {
	constructor(opts) {
		super()
		
		this._options = defaults(opts, options);
		this._started = false;	// Si inicializó o no
		this._timer = null;
		this._client = null;
		this._agentId = null;
	}

	connect() {
		// Si no se ha iniciado se inicia
		if (!this._started) {
			const opts = this._options;
			this._client = mqtt.connect(opts.mqtt.host);
			this._started = true;

			// Nos subscribimos a los mensajes que queremos escuchar 
			// El cliente nos notificará cuando tengamos mensajes del servidor
			this._client.subscribe('agent/message');
			this._client.subscribe('agent/connected');
			this._client.subscribe('agent/disconnected');

			this._client.on('connect', () = {
				this._agentId = uuid.v4();

				this.emit('connected', this._agentId);

				this._timer = setInterval(() => {
					this.emit('agent/message', 'this is a message');
				}, opts.interval);
			});

			this._cliente.on('message', (topic, payload) => {
				payload = parsePayload(payload);

				let broadcast = false;
				switch (topic) {
					case 'agent/connected':
					case 'agent/disconnected':
					case 'agent/message':
						broadcast = payload && payload.agent && payload.agent.uuid !== this._agentId;
						break;
				}

				if (broadcast) {
					this.emit(topic, payload);
				}
			});

			this._client.on('error', () => this.disconnect());
		}
	}

	disconnect() {
		if (this._started) {
			clearInterval(this._timer);
			this._started = false;
			this.emit('disconnected');
		}
	}

}

// Para probarlo:
// node
// const hunabAgent = require('./');
// const agent = new hunabAgent({ interval: 2000 });
// agent.on('agent/message', console.log) ó agent.on('agent/message', (msg) => console.log(msg))
// agent.connect();

module.exports = HunabAgent;