'use strict'

const Hapi = require('@hapi/hapi');
const handlebars = require('handlebars');
const inert = require('inert');
const path = require('path');
const vision = require('vision');

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
	   	await server.register(vision);

	   	// Configuramos vision
	   	server.views({
	   		engines: { // engines me permite definir que motor de plantillas voy a utilizar
	   			// Indico que el motor será handlebars
	   			// vision va a buscar plantillas en hbs y las renderizará con handlebars
	   			hbs: handlebars,
	   		},
	   		relativeTo: __dirname, // Esto es para que las vistas estén fuera del public
	   		path: 'views',
	   		layout: true,	// layout es una característica de handlebars
	   		layoutPath: 'views'
	   	});

	   server.route({
	      path: '/',
	      method: 'GET',
	      handler: (req, h) => {
	      	// Devuelvo un objeto de respuesta
	        return h.view('index', {
	        	title: 'home'
	        });
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