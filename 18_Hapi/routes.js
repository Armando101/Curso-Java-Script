// Arreglo de rutas
'use strict'
const joi = require('joi');
const site = require('./controllers/site');
const user = require('./controllers/user');
const question = require('./controllers/question');

module.exports = [
{
  path: '/',
  method: 'GET',
  handler: site.homes
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
  path: '/ask',
  method: 'GET',
  handler: site.ask
},
{
	// /{id} indico que voy a leer esa variable por params
  path: '/question/{id}',
  method: 'GET',
  handler: site.viewQuestion
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
  path: '/create-question',
  method: 'POST',
  options: {
  	validate: {
  		payload: joi.object({
  			title: joi.string().required(),
  			description: joi.string().required()
  		}),
  		// En caso de que no se haga una validación correcta
  		failAction: user.failValidation
  	}
  },
  handler: question.createQuestion
},
{
  path: '/answer-question',
  method: 'POST',
  options: {
  	validate: {
  		payload: joi.object({
  			answer: joi.string().required(),
  			id: joi.string().required()
  		}),
  		// En caso de que no se haga una validación correcta
  		failAction: user.failValidation
  	}
  },
  handler: question.answerQuestion
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
// Agregamos assets para que no mezclen con las llamadas a 404
// Agrupamos todas las páginas de nuestro sitio en assets
// Cualquier petición a la raiz me arrojará un 404
{
	path: '/assets/{params*}',
	method: 'GET',
	handler: {
		directory: {
			// Hace referencia al directorio actual
			// public ya que lo habíamos definido arriba
			path: '.',
			index: ['index.html']
		}
	},

},
{
	// Nos permite capturar los errores de 404
	// Indicamos que todo lo que esté en la raíz me arroja un error 404
	method: ['GET', 'POST'],
	path: '/{any*}',
	handler: site.notFound
}]
