const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.post('/', function(req, res) {
	controller.addUser(req.body.name)
	.then((data)=> {
		response.succes(req, res, data, 201);
	})
	.catch((err) => {
		response.error(req, res, 'Internal Error', 500, err);
	});
});

router.get('/', function(req, res) {
	const filterUser = req.query.name || null;
	controller.getUsers(filterUser)
	.then((userList) => {
		response.succes(req, res, userList, 200);
	})
	.catch((err) => {
		response.error(req, res, 'Unexpected Error', 500, err);
	});
});


module.exports = router;