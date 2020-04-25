const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 8080;

app.use(express.static('public'));

// La función se ejecutará caundo alguien se conecte
io.on('connection', function(socket) {
	console.log('Nuevo cliente conectado');
	socket.emit('mensaje', 'Bienvendio!!!')
});

/*	// Enviamo un mensaje cada 3 segundos
setInterval(function() {
	io.emit('mensaje', 'Hola, les escribo a todos mis amigos');
}, 3000);
*/

server.listen(port, function() {
	console.log('Servidor inicado en http://localhost:' + port)
});