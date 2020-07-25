// const process = require('process'); // no es necesario importarlo ya que viene incluido en los modulos globales

process.on('beforeExit', ()=> {
	console.log('El proceso va a terminar');
});

process.on('exit', ()=> {
	console.log('El proceso termino');
	setTimeout(()=> {
		console.log('Esto no se va a ver nunca');
	}, 0);
});

process.on('uncaughtException', (err, origin)=> {
	console.error('Vaya se nos ha olvidado capturar un error');
	console.error(err.message);
});

// process.on('uncaughtRejection');

// functionQueNoExiste();

console.log('Soy el final del script');