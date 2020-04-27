exports.success = function(req, res, message='', status=200) {
	//let statusCode = status || 200;
	//let statusMessage = message || '';

	res.status(status).send({
		error: false,
		status: status,
		body: message
	});
}

exports.error = function(req, res, message='Internal error', status=500) {
	//let statusCode = status || 500;
	//let statusMessage = message || 'Internal server error';

	res.status(status).send({
		error: message,
		status: status,
		body: false
	});
}