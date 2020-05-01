// Arreglo de rutas
'use strict'
const joi = require('joi');
const site = require('./controllers/site');
const user = require('./controllers/user');

module.exports = [
{
  path: '/',
  method: 'GET',
  handler: site.home
},
{
  path: '/home',
  method: 'GET',
  handler: site.home
},
{
  path: '/register',
  method: 'GET',
  handler: site.register
},
{
  path: '/login',
  method: 'GET',
  handler: site.login
},
{
  path: '/logout',
  method: 'GET',
  handler: user.logout
},
{
  path: '/create-user',
  options: {
  	// Creamos validaciones para el formulario
  	validate: {
  		payload: joi.object({
  			// name tiene que ser una string de mínimo 3 caracteres
  			name: joi.string().required().min(3),
  			email: joi.string().email().required(),
  			password: joi.string().required().min(6)
  		})
  	}
  },
  method: 'POST',
  handler: user.createUser
},
{
  path: '/validate-user',
  method: 'POST',
  options: {
  	validate: {
  		payload: joi.object({
  			email: joi.string().email().required(),
  			password: joi.string().required().min(6)
  		}),
  		// En caso de que no se haga una validación correcta
  		failAction: user.failValidation
  	}
  },
  handler: user.validateUser
},
{
  path: '/redirect',
  method: 'GET',
  handler: (req, h) => {
  	// Devuelvo un objeto de respuesta
    return h.redirect('https://google.com');
  }
},

// Esta ruta es para que sirva los archivos css
{
	path: '/{params*}',
	method: 'GET',
	handler: {
		directory: {
			// Hace referencia al directorio actual
			// public ya que lo habíamos definido arriba
			path: '.',
			index: ['index.html']
		}
	}
}]
