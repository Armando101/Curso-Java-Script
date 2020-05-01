'use strict'

const users = require('../models/index').users;

async function createUser(req, h) {
  	let result
  	try {
  		result = await users.create(req.payload);
  	} catch (error) {
  		console.error(error);
  		return h.response('Problemas creando el usuario').code(500);
  	}

  	return h.response(`Usuario creado ID: ${result}`);
}

async function validateUser (req, h) {
	let result;
	try {
		result = await users.validateUser(req.payload);
		if (!result) {
  			return h.response('Email y/o constrseña incorrecta').code(401);
  		}
	} catch (error) {
		console.error(error);
  		return h.response('Problemas validando el usuario').code(500);
	}

	// Si el login fue correcto me manda al home
	// Crea una cookie de user con nombre y email
	return h.redirect('/').state('user', {
		name: result.name,
		email: result.email,
	});
}

function logout (req, h) {
	// Unstate remueve la cookie
	return h.redirect('/login').unstate('user');
}

module.exports = {
	createUser: createUser,
	validateUser: validateUser,
	logout: logout
}