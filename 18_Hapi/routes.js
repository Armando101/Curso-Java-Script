// Arreglo de rutas
'use strict'

const site = require('./public/controllers/site');
const user = require('./public/controllers/user');

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
  path: '/create-user',
  method: 'POST',
  handler: user.createUser
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
