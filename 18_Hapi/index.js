'use strict'

const Hapi = require('@hapi/hapi');
const handlebars = require('./lib/helpers');
const inert = require('inert');
const methods = require('./lib/methods');
const path = require('path');
const routes = require('./routes');
const vision = require('vision');
const site = require('./controllers/site');

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

         // Esto es un método de servidor, estará disponible en cualquier función de ruta por medio del request
         // Podemos acceder al servidor y a todos sus métodos
         // Esto es útil cuando tengamos mucha lógica que compartir entre diferentes rutas
         // Aquí registro los métodos de servidor
        server.method('setAnswerRight', methods.setAnswerRight);
        server.method('getLast', methods.getLast, {
          cache: {
            expiresIn: 1000*60,
            generateTimeout: 2000 // Si el método falla después de este tiempo se carga fuera de cache
          }
        });

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
      
      // ext es un método del servidor que nos permite excuchar un hook del life cycle  
      // Antes de que se ejecute la respuesta quiero que se ejecute la función que esta como segundo argumento
      server.ext('onPreResponse', site.fileNotFound);
	   	server.route(routes);
	    await server.start();
   	} catch (error) {
   		console.log(error);
   		process.exit(1);
   	}
	
	console.log('Server running on %s', server.info.uri);
}

// unhandledRejection es un error que se genera cuando una promesa no está siendo controlada
process.on('unhandledRejection', (err) => {
    console.error('unhandledRejection', err.message, err);
    process.exit(1);
});

// unhandledException es un error que se genera cuando una excepción no está siendo controlada
process.on('unhandledException', (err) => {
    console.error('unhandledException', err.message, err);
    process.exit(1);
});

init();