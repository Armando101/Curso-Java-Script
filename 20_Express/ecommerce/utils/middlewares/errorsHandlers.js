// Middlewares personalizados
const { config } = require('../../config');

// Este middleware me permite hacer logs de los errores
function logErrors(err, req, res, next) {
	console.log(err.stack);
	next(err); 	// Llama al próximo middleware de error, en caso de que no exista llama al nativo de express
}

// Manejador de errores del cliente
// Este error se maneja en errores de la API
function clientErrorHandler(err, req, res, next) {
	// catch errors for AJAX request

	// Al hacer la petición desde Postman incluir la cabecera:
	// X-Requested-With: XMLHttpRequest
	if (req.xhr) {	// Detecta que fue llamada con un cliente
		res.status(500).json({ err: err.message});
	} else {
		next(err);
	}
}

// Cuando manejamos strings y sucede un error a veces express no es capaz de detectarlo
// Este error se maneja en las vistas
function errorHandler(err, req, res, next) {
	// catch error while streaming
	if (res.headersSent) {
		next(err);
	}

	if (!config.dev) { 	// Si está en producción borra el stack para evitar darle información al usuario sobre el error
		delete err.stack;
	}

	res.status(err.status || 500);
	res.render('error', { error: err });
}

module.exports = {
	logErrors,
	clientErrorHandler,
	errorHandler
}