// La capa de red es la encargada de recibir la petición HTTP, procesarla y enviarla al controlador

const express = require('express');
const response = require('../../network/response');
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
	console.log(req.query);
	if (req.query.error == 'ok') {
		response.error(req, res, 'Error inesperado', 500, 'Es sólo una simulación de errores');
	} else {
		response.succes(req, res, 'Creado coorrectamente', 201);
	}
});


module.exports = router;