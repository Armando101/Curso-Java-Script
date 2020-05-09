const fs = require('fs');

const server = require('http').createServer();

// Si hacemos una petición del servidor
// El archivo que queremos leer se va a consumir toda la memoria del servidor y puede causar problemas

server.on('request', (req, res) => {
	fs.readFile('./big', (err, data) => {
		if (err) {
			console.log('error');
		}

		res.end(data);
	});
});

server.listen(8000);