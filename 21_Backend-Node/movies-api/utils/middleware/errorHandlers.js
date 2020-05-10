const boom = require('@hapi/boom')
const { config } = require('../../config');

function withErrorStack(error, stack) {
	if (config.dev) {
// Aplicamos el spread operator porque ahora con boom error Me trae más cosas como statusCode, error, mensaje
		console.log('Desde withErrorStack: ', {...error});
		return { ...error, stack } 
	}

	return error;
}

function logErrors(err, req, res, next) {
	console.log(err);
	next(err);
}

// Esta función me dice si el error es de tipo boom o no
function wrapErrors(err, req, res, next) {
	if (!err.isBoom) {
		next(boom.badImplementation(err));
	}

	next(err)
}

function errorHandler(err, req, res, next) { // eslint-disable-line
	// En este punto el error es de tipo boom, tiene un output que me dice el statusCode y el payload
	const { output: { statusCode, payload }} = err;
	res.status(statusCode || 500);
	console.log('Desde errorHandlers.js: ', payload, err.stack)
	res.json(withErrorStack(payload, err.stack));
}

module.exports = {
	logErrors,
	errorHandler,
	wrapErrors
}