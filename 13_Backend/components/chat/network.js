const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
	controller.addUser(req.body.users)
	.then((data)=> {
		response.succes(req, res, data, 201);
	})
	.catch((err) => {
		response.error(req, res, 'Internal Error', 500, err);
	});
});

// Traemos los chats de un usuario indicado
router.get('/:userId', function(req, res) {
	controller.listChats(req.params.userId)
	.then((users) => {
		response.succes(req, res, users, 200);
	})
	.catch((err) => {
		response.error(req, res, 'Unexpected Error', 500, err);
	});
});


module.exports = router;