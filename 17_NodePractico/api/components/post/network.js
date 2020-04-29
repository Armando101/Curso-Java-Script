const express = require('express');

const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.post('/', upsert);

// Functions
function list(req, res, next) {
	controller.list()
	.then(data => {
		response.success(req, res, data, 200);
	})
	.catch(next);
}

function upsert(req, res) {
	controller.upsert(req.body)
	.then((collection) => { response.success(req, res, collection, 201) })
	.catch((err) => { response.error(req, res, err.message, 500) })
};

module.exports = router;