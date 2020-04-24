// Este módulo se encargará de responser las peticiones

// De esta manera podemos tener respuestas iguales
exports.succes = function(req, res, message, status) {
	res.status(status || 200).send({
		error: '',
		body: message
	});
}

exports.error = function(req, res, error, status) {
	res.status(status || 500).send({
		error: error,
		body: ''
	});
}