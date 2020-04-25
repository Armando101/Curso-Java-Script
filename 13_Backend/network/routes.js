const express = require('express');
const message = require('../components/message/network'); // Importamos el router
const user = require('../components/user/network');
const chat = require('../components/chat/network');

// Esta función añadirá todas las rutas
// De esta manera cada que las rutas llamen a '/message', se llamará al compoente message
// Esto evitará que usemos '/message' en el network.js
// Ahora sólo tendremos '/'
const routes = function (server) {
	// En este caso no le estoy pasando una función como segundo parámetro
	// Le paso el router de mensajes
	server.use('/message', message);
	server.use('/user', user);
	server.use('/chat', chat);
}

module.exports = routes;