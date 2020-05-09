const http = require('http');
const server = http.createServer();
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

server.on('request', (req, res) => {
	

	if (req.method == 'POST' && req.url == '/echo') {
		let body = [];

		req.on('data', chunk => {	// Se manda llamar cuando recibimos datos
			// body.push(chunk);		// Los chunks son pequeñas partes de datos
			const weekDay = new Date(chunk).getDay();
			body.push(days[weekDay])	// El dato a enviar será del tipo "August 29 1997"
		})
		.on('end', () => {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			//body = Buffer.concat(body).toString();
			res.end(`Naciste un ${body}`);
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');