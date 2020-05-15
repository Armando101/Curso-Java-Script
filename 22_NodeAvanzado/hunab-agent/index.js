'use strict'

const debug = require('debug')('hubab:agent');
const os = require('os');
const util = require('util');
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
		this._metrics = new Map();
	}

	addMetric(type, fn) {
		this._metrics.set(type, fn);
	}

	removeMetric(type) {
		this._metrics.delete(type);
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

			this._client.on('connect', () => {
				this._agentId = uuid.v4();

				this.emit('connected', this._agentId);

				this._timer = setInterval(async () => {
					let message;
					if (this._metrics.size > 0) {
						message = {
							agent: {
								uuid: this._agentId,
								username: opts.username,
								name: opts.name,
								hostname: os.hostname() || 'localhost',
								pid: process.pid
							},
							metrics: [],
							timestamp: new Date().getTime()
						}
					}

					for (let [ metric, fn ] of this._metrics) {
						if (fn.length == 1) {
							fn = util.promisify(fn);
						}

						message.metrics.push({
							type: metric,
							value: await Promise.resolve(fn())
						})
					}

					debug('Sending', message);

					this._client.publish('agent/message', JSON.stringify(message));
					this.emit('message', message);
				}, opts.interval);
			});

			this._client.on('message', (topic, payload) => {
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
			this.emit('disconnected', this._agentId);
			this._client.end();
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