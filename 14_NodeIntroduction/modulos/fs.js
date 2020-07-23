const fs = require('fs');

function leer(ruta, cb) {
	fs.readFile(ruta, (err, data) => {
		cb(data.toString());
	});
}

function escribir(ruta, contenido) {
	fs.writeFile(ruta, contenido, (err) => {
		if (err) {
			console.err('No he podido escribirlo', err)
		} else {
			console.log('Success')
		}
	});
}

function borrar(ruta, cb) {
	fs.unlink(ruta, cb);
}

escribir(__dirname + '/archivo.txt', 'Soy un archivo nuevo');
leer(__dirname + '/archivo.txt', console.log);
borrar(__dirname + '/archivo.txt', console.log);