'use strict'

const Hapi = require('@hapi/hapi');

async function init() {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost'
    });

   server.route({
      path: '/',
      method: 'GET',
      handler: (req, h) => {
      	// Devuelvo un objeto de respuesta
        return h.response('Hello World').code(200);
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


   	try {	
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