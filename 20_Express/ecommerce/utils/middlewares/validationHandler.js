const Joi = require('@hapi/joi');
const boom = require('@hapi/boom');

function validate(data, schema) {
	const { error } = Joi.object(schema).validate(data);
	return error;
}

function validationHandler(schema, check='body') {
	return function(req, res, next) {
		const error = validate(req[check], schema);
		error ? next(boom.badRequest(error)) : next();
	}
}

module.exports = validationHandler;