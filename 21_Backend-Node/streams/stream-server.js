const fs = require('fs');

const server = require('http').createServer();

// Esta implementación evitará que las peticiones consuman memoria del servidor
server.on('request', (req, res) => {
	const src = fs.createReadStream('./big');
		src.pipe(res);
});

server.listen(8000);