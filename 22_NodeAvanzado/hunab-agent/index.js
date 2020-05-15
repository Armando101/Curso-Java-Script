'use strict'

const EventEmitter = require('events');

class HunabAgent extends EventEmitter {
	constructor(opts) {
		super()
		
		this._options = opts;
		this._started = false;	// Si inicializó o no
		this._timer = null;
	}

	connect() {
		// Si no se ha iniciado se inicia
		if (!this._started) {
			this._started = true;
			this.emit('connected');
			const opts = this._options;
			this._timer = setInterval(() => {
				this.emit('agent/message', 'this is a message');
			}, opts.interval);
		}
	}

	disconect() {
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