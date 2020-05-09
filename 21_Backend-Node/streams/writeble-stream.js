const { Writable } = require('stream');

const WritableStream = new Writable({
	// chunk: datos		encoding: opcional, tipo de codificación	función de callback
	write(chunk, encoding, callback) {
		console.log(chunk.toString());
		callback();	// Se llama esta función para indicar que ha finalizado
	}
});

// Los wiritables strings tienen que estar añadidos a un readable stream
// process.stdin: funcionalidad nativa que se encarga de leer los datos que vienen desde consola como arguemento
// pipe recibe un stream de entrada y devuelve otro con una transformación
process.stdin.pipe(WritableStream);
