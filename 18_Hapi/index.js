'use strict'

const Hapi = require('@hapi/hapi');
const inert = require('inert');
const path = require('path');

async function init() {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        routes: {
        	files: {
        		// Esto nos permite que todos lo archivos que sirvamos los haga desde public
        		relativeTo: path.join(__dirname, 'public/')
        	}
        }
    });



   	try {
   		// Tenemos que registrar el plugin cada que lo vamos a usar
   		// No basta con sólo importarlo
   		await server.register(inert);
	   
	   server.route({
	      path: '/home',
	      method: 'GET',
	      handler: (req, h) => {
	      	// Devuelvo un objeto de respuesta
	        return h.file('index.html');
	      }
	   });

	   server.route({
	      path: '/redirect',
	      method: 'GET',
	      handler: (req, h) => {
	      	// Devuelvo un objeto de respuesta
	        return h.redirect('https://google.com');
	      }
	   });
		
		// Esta ruta es para que sirva los archivos css
		server.route({
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
		});

	    await server.start();
   	} catch (error) {
   		console.log(error);
   		process.exit(1);
   	}
	
	console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();