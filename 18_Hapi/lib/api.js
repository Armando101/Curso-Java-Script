'use strict'

// También es necesario registrar este plugin en index.js

const joi = require('joi');
const boom = require('boom');
const questions = require('../models/index').questions;

module.exports = {
	name: 'api-rest',
	version: '1.0.0',
	async register(server, options) {
		const prefix = options.prefix || 'api';

		server.route({
			method: 'GET',
			path: `/${prefix}/question/{key}`,
			options: {
			    validate: {
			        params: joi.object({
			            key: joi.string().required()
			        }),
			        failAction: failValidation,
			    },
			},
			handler: async(req, h) => {
				let result;
				try {
					result = await questions.getOne(req.params.key);
					if (!result) {
						return boom.notFound(`No se pudo encontrar la pregunta ${req.params.key}`);
					}
				} catch (error) {
					return boom.badImplementation(`Hubo un error buscando ${req.params.key} - ${error}`);
				}
				return result;
			}
		});


		server.route({
			method: 'GET',
			path: `/${prefix}/questions/{amount}`,
			options: {
			    validate: {
			        params: joi.object({
			            amount: joi.number().integer().min(1).max(20)
			              .required(),
			        }),
			        failAction: failValidation,
			    },
			},
			handler: async(req, h) => {
				let result;
				try {
					result = await questions.getLast(req.params.amount);
					if (!result) {
						return boom.notFound(`No se pudo recuperar las preguntas`);
					}
				} catch (error) {
					return boom.badImplementation(`Hubo un error buscando las preguntas ${error}`);
				}
				return result;
			}
		});

		function failValidation(req, h, err) {
			return Boom.badRequest('Por favor use los parámetros correctos');
		}
	}
}