const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const config = require('../../config');
// Con multer podemos guardar imágenes
// Indico que guardará los archivos en la carpeta pública en una carpeta files
// Esto para después acceder con:
// localhost:3000/app/files/NombreDeImagen
// localhost:3000/app/ -> accede directamente a la carpeta public
const upload = multer({
	dest: 'public/' + config.filesRoute + 'files'
});

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

router.post('/', upload.single('file'), function(req, res) {
	// Enviamos la imágen
	// console.log(req.file);
	controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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