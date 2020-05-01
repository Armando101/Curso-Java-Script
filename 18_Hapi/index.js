'use strict'

const Hapi = require('@hapi/hapi');
const handlebars = require('handlebars');
const inert = require('inert');
const path = require('path');
const routes = require('./routes');
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

       // Nombre de la cookie y tiempo de vida en milisegundos
       // si es segura o no
       server.state('user', {
         ttl: 1000 * 60 * 60 *24,
         isSecure: process.env.NODE_ENV === 'prod', 
         encoding: 'base64json'
       });

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


	   	server.route(routes);
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