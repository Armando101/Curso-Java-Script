const EventEmmiter = require('events');

class Logger extends EventEmmiter {
	execute(cb) {
		console.log('Before');
		this.emit('start', 'this is an argument');
		cb();
		this.emit('finish');
		console.log('After');
	}
}

const logger = new Logger();

logger.on('start', (msg) => console.log('Starting', msg))
logger.on('finish', () => console.log('Finishing'))
logger.on('finish', () => console.log("It's Done"));

logger.execute(()=> setTimeout(()=>console.log('Hello World'), 1000));