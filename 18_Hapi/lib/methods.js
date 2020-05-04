'use strict'

const question = require('../models/index').questions;

// Si quiero agregar métodos de servidor los tengo que registrar en index

async function setAnswerRight(questionId, answerId, user) {
	let result
	try {
		result = await question.setAnswerRight(questionId, answerId, user);
	} catch (error) {
		console.error(error);
		return false;
	}

	return result;
}

// Esta función nos permite guardar en caché del lado del servidor
async function getLast(amount) {
	let data;
	try {
      data = await question.getLast(10);
    } catch (error) {
      console.error(error);
    }

    // Es importante añadir caché para evitar bombardear nuestra base de datos de peticiones
    console.log('Este método no se ejecuta cuando se carga el home en caché')
    console.log('Se ejecutó el método')

    return data;
}

module.exports = {
	setAnswerRight: setAnswerRight,
	getLast: getLast
}
