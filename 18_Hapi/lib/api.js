'use strict'

// También es necesario registrar este plugin en index.js

const authBasic = require('@hapi/basic');
const joi = require('joi');
const boom = require('boom');
const questions = require('../models/index').questions;
const users = require('../models/index').users;

module.exports = {
	name: 'api-rest',
	version: '1.0.0',
	async register(server, options) {
		const prefix = options.prefix || 'api';

		// Registramos el plugin de autenticación
		await server.register(authBasic);
		server.auth.strategy('simple', 'basic', { validate: validateAuth });
		server.auth.default('simple');

		server.route({
			method: 'GET',
			path: `/${prefix}/question/{key}`,
			options: {
				auth: 'simple',
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
				auth: 'simple',
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

		// Esta función se encarga de que el usuario esté registrado
		// De lo contrario no dejará usar la API 
		async function validateAuth(req, username, password, h) {
			let user;
			try {
				user = await users.validateUser({ email: username, password: password });
			} catch(error) {
				server.log('error', error);
			}		
			
			return {
				credentials: user || {},
				isValid: (user !== false)
			}
		}
	}
}