'use strict'

const boom = require('boom');
const users = require('../models/index').users;

async function createUser(req, h) {
  	let result
  	try {
  		result = await users.create(req.payload);
  	} catch (error) {
  		console.error(error);
  		// return h.response('Problemas creando el usuario').code(500);
  		return h.view('register', {
  			title: 'Registro',
  			error: 'Error creando el usuario'
  		});
  	}

  	// return h.response(`Usuario creado ID: ${result}`);
  	return h.view('register', {
  		title: 'Registro',
  		success: 'Usuario creado exitosamente'
  	});
}

async function validateUser (req, h) {
	let result;
	try {
		result = await users.validateUser(req.payload);
		if (!result) {
  			// return h.response('Email y/o constrseña incorrecta').code(401);
  			return h.view('login', {
	  			title: 'Login',
	  			error: 'Email y/o contraseña incorrecta'
  			});
  		}
	} catch (error) {
		console.error(error);
  		// return h.response('Problemas validando el usuario').code(500);
  		return h.view('login', {
	  			title: 'Login',
	  			error: 'Problemas validando el usuario'
  		});
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

function failValidation(req, h, err) {
	const templates = {
		'/create-user': 'register',
		'/validate-user': 'login'
	}

	// Hacemos más amigable la vista al usuario en caso de que haya un error de validación
	// El takeover finaliza el life cycle y muestra el error al usuario
	return h.view(templates[req.path], {
		title: 'Error de validación',
		error: 'Por favor complete los campos requeridos'
	}).code(400).takeover();
	// return boom.badRequest('Falló la validación', req.payload);
}

module.exports = {
	createUser: createUser,
	validateUser: validateUser,
	logout: logout,
	failValidation: failValidation
}