// Este módulo se encargará de responser las peticiones

// De esta manera podemos tener respuestas iguales
exports.succes = function(req, res, message, status) {
	res.status(status || 200).send({
		error: '',
		body: message
	});
}

exports.error = function(req, res, error, status, details) {

	// Aquí imprimimos más información sobre un posible error
	// No es buena práctica darle información al usuario sobre qué está fallando
	// Basta con decir error interno y regresar un código 500
	// Este mensaje sólo lo verá el servidor, aquí sí podemos poner más información sobre qué falló
	// Conexión a base de datos, recurso inválido, etc.
	console.error('[response error]: ' + details);

	res.status(status || 500).send({
		error: error,
		body: ''
	});
}