const statusMessage = {
	'200': 'Done',
	'201': 'Created',
	'400': 'Invalid format',
	'500': 'Internal error'
}

exports.succes = function(req, res, message, status=200) {
	let statusCodeMessage = message;

	if (!message) {
		statusCodeMessage = statusMessage[status];
	}

	res.status(status).send({
		error: '',
		body: statusCodeMessage
	});
}

exports.error = function(req, res, error, status=500, details) {

	// Aquí imprimimos más información sobre un posible error
	// No es buena práctica darle información al usuario sobre qué está fallando
	// Basta con decir error interno y regresar un código 500
	// Este mensaje sólo lo verá el servidor, aquí sí podemos poner más información sobre qué falló
	// Conexión a base de datos, recurso inválido, etc.
	console.error('[response error]: ' + details);
	let statusCodeMessage = error;
	if (!error) {
		statusCodeMessage = statusMessage[status];
	}

	res.status(status).send({
		error: statusCodeMessage,
		body: ''
	});
}