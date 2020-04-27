const express = require('express');

const response = require('../../../network/response');
const controller = require('./index');
const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

// Internal functions

function list(req, res) {
	// const lista = controller.list();
	// response.success(req, res, lista, 200);

	// Utilizamos una promesa para manejar los casos en los que ocurra un error
	controller.list()
	.then((lista)=> { response.success(req, res, lista, 200); })
	.catch((err) => { response.error(req, res, err.message, 500); });
};

function get(req, res) {
	// const lista = controller.get(req.params.id);
	// response.success(req, res, lista, 200);
	
	controller.get(req.params.id)
	.then((user) => { response.success(req, res, user, 200) })
	.catch((err) => { response.error(req, res, err.message, 500) });
};

function upsert(req, res) {
	controller.upsert(req.body)
	.then((collection) => { response.success(req, res, collection, 201) })
	.catch((err) => { response.error(req, res, err.message, 500) })
};

router.delete('/', function(req, res) {
	controller.remove(req.body.id)
	.then((collection) => { response.success(req, res, collection, 200) })
	.catch((err) => { response.error(req, res, err.message, err.status, err.details) });
});

module.exports = router;