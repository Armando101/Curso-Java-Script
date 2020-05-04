'use strict'

// Módulos para trabajar con archivos Util para usar archivos
const { writeFile } = require('fs');
const { promisify} = require('util');
const { join } = require('path');
const { v1: uuid } = require('uuid'); // Se requiere instalar npm i uuid

const write = promisify(writeFile); // Para poder utilizar writeFile como una promesa 

const questions = require('../models/index').questions;

async function createQuestion(req, h) {
	let result, filename;
	if (!req.state.use) {
		h.redirect('login');
	}
	try {
		console.log('Data: ', req.payload, ' Usuario: ', req.state.user);
		console.log('Buffer: ', Buffer.isBuffer( req.payload.image ));
		if (req.payload.image) { // true si me envian un archivo
			filename = `${uuid()}.png`;
			// Guardo el archivo en mi servidor
			// Especifico la ruta donde lo guardará y envío la imagen que me llega por request
			await write(join(__dirname, '..', 'public', 'uploads', filename), req.payload.image);
		}
		result = await questions.create(req.payload, req.state.user, filename);
		// Usamos el plugin de good
		// console.log(`Pregunta creada con el ID ${result}`);
		req.log(`Pregunta creada con el ID ${result}`);
	
	} catch (error) {
		req.error('Ocurrión en error: ', error);

		return h.view('ask', {
			title: 'Crar pregunta',
			error: 'Problemas creando la pregunta'
		}).code(500).takeover();
	}

	return h.redirect(`question/${result}`);
	//return h.response(`Pregunta creada con el ID ${result}`);

}

async function answerQuestion(req, h) {
	let result;
	try {
		result = await questions.answer(req.payload, req.state.user);
		console.log(`Respuesta creada: ${result}`);
	} catch (error) {
		console.error(error);
	}

	return h.redirect(`/question/${req.payload.id}`);
}

async function setAnswerRight(req, h) {
	if (!req.state.user) {
		return h.redirect('/login');
	}
	let result;
	try {
		result = await req.server.methods.setAnswerRight(req.params.questionId, req.params.answerId, req.state.user);
		console.log(result);
	} catch (error) {
		console.error(error);
	}

	return h.redirect(`/question/${req.params.questionId}`)
}

module.exports = {
	createQuestion: createQuestion,
	answerQuestion: answerQuestion,
	setAnswerRight: setAnswerRight
}