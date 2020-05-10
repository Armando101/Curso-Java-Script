const boom = require('@hapi/boom');

// No contiene un next a pesar de ser un middleware
// Esto es porque este middleware irá al final de las rutas cuando ya no haya nada después
// Este será el último y arrogará un error de NotFound
function notFoundHandler(req, res) {
	const {
		output: { statusCode, payload }
	} = boom.notFound();

	res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;