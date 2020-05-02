'use strict'

const questions = require('../models/index').questions;

async function createQuestion(req, h) {
	let result;
	try {
		console.log('Data: ', req.payload, ' Usuario: ', req.state.user);
		result = await questions.create(req.payload, req.state.user)
		console.log(`Pregunta creada con el ID ${result}`);
	} catch (error) {
		console.error('Ocurrión en error: ', error);

		return h.view('ask', {
			title: 'Crar pregunta',
			error: 'Problemas creando la pregunta'
		}).code(500).takeover();
	}

	return h.response(`Pregunta creada con el ID ${result}`);

}

module.exports = {
	createQuestion: createQuestion
}