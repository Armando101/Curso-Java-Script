const http = require('http');

http.createServer(function (req, res) {
	console.log('Nueva peticion');
	console.log(req.url);

	switch(req.url) {
		case '/hola':
			res.write('Hola que tal');
			res.end();
			break;

		default:
			res.writeHead(404, { 'Content-Type': 'text/plain' })
			res.write('Error 404, no se lo que quires');
			res.end();
	}

	res.writeHead(201, { 'Content-Type': 'text/plain' })
	// res.write('Hola, ya se usar HTTP en nodeJS');

	res.end();
}).listen(3000);

console.log('Escuchando http en el puerto 3000');