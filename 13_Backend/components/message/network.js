// La capa de red es la encargada de recibir la petición HTTP, procesarla y enviarla al controlador

const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', function(req, res) {
	// Vemos los headers de la petición
	console.log(req.headers);
	// Podemos enviar al cliente headers
	res.header({
		"custom-header": "Nuestra cabecera personalizada"
	});
	// res.send('Hola desde GET');
	response.succes(req, res, 'Lista de mensajes');
});

router.post('/', function(req, res) {
	// Enviamos a la función del controlador un usuario y un mensaje
	controller.addMessage(req.body.user, req.body.message)
	.then((fullMessage)=> {
		response.succes(req, res, fullMessage, 201);
	})
	.catch((err) => {
		response.error(req, res, err, 400, 'Error en el controlador');
	});
});


module.exports = router;