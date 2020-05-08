// Middlewares personalizados
const boom = require('@hapi/boom');
const { config } = require('../../config');
const isRequestAjaxOrApi = require('../../utils/isRequestAjaxOrApi')

function withErrorStack(err, stack) {
	if (config.dev) {
		return { ...err, stack } // Object.assign({}, err, stack)
	}
}

// Este middleware me permite hacer logs de los errores
function logErrors(err, req, res, next) {
	console.log(err.stack);
	next(err); 	// Llama al próximo middleware de error, en caso de que no exista llama al nativo de express
}

// Verifica si no el error no está wrapeado en boom para agregarlo	
function wrapErrors(err, req, res, next) {
	if (!err.isBoom) {
		next(boom.badImplementation(err));
	}

	next(err);
}

// Manejador de errores del cliente
// Este error se maneja en errores de la API
function clientErrorHandler(err, req, res, next) {
	const {
		output: { statusCode, payload }
	} = err;
	// catch errors for AJAX request if an error ocurs while straming

	// Al hacer la petición desde Postman incluir la cabecera:
	// X-Requested-With: XMLHttpRequest
	if (isRequestAjaxOrApi(req) || res.headersSent) {	// Detecta que fue llamada con un cliente
		res.status(statusCode).json(withErrorStack(payload, err.stack));
	} else {
		next(err);
	}
}

// Cuando manejamos strings y sucede un error a veces express no es capaz de detectarlo
// Este error se maneja en las vistas
function errorHandler(err, req, res, next) {
	const {
		output: { statusCode, payload }
	} = err;

	res.status(statusCode);
	res.render('error', withErrorStack(payload, err.stack));
}

module.exports = {
	logErrors,
	wrapErrors,
	clientErrorHandler,
	errorHandler
}