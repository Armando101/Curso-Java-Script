// La capa de red es la encargada de recibir la petición HTTP, procesarla y enviarla al controlador

const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', function(req, res) {
	// Recogemos los datos que me llegan en la URL
	const filterMessages = req.query.user || null;
	controller.getMessages(filterMessages)
	.then((massageList) => {
		response.succes(req, res, massageList, 200);
	})
	.catch((err) => {
		response.error(req, res, 'Unexpected Error', 500, err);
	});
});

router.post('/', function(req, res) {
	// Enviamos a la función del controlador un usuario y un mensaje
	controller.addMessage(req.body.chat, req.body.user, req.body.message)
	.then((fullMessage)=> {
		response.succes(req, res, fullMessage, 201);
	})
	.catch((err) => {
		response.error(req, res, err, 400, 'Error en el controlador');
	});
});

// Con esta ruta haremos modificaciones
router.patch('/:id', function(req, res) {
	console.log(req.params.id);

	controller.updateMessage(req.params.id, req.body.message)
	.then((data) => {
		response.succes(req, res, data, 200);
	})
	.catch((err) => {
		response.error(req, res, 'Error interno', 500, err);
	});

	// Importante no mandar otro send porque marcará error de headers
	//res.send('Ok');
});

router.delete('/:id', function(req, res) {
	controller.deleteMessage(req.params.id)
	.then(() => {
		response.succes(req, res, `Usuario ${req.params.id} eliminado `, 200);
	})
	.catch((err) => {
		response.error(req, res, 'Error interno', 500, err);
	})
});

module.exports = router;