const { exec, spawn } = require('child_process');

// exec('node consola.js ', (err, stdout, sterr) => {
/*exec('ls -la', (err, stdout, sterr) => {
	if (err) {
		console.error(err.message);
		return false;
	}
	console.log(stdout);
});*/

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
	console.log(dato);
});

proceso.on('exit', function() {
	console.log('El proceso termino');
	console.log(proceso.killed);
});
