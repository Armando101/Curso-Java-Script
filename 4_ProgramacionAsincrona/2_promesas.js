// Instalación de request promise, esta es una extensión de request
// npm install request-promise

// Una promesa representa un valor que eventualmente existirá
// Puede ser el resultado de una operación o el resultado de algún posible error

const rp = require('request-promise');

// El resultado de ejecutar la función rp es un objeto
// Este objeto es de tipo promise, representa una promesa
// Las promesas son objetos en JS
// Las promesas tienen un método then que se ejecuta si no hubo errores
// Si ocurrió algún error se ejecuta la función catch

rp('https://google.com')
	.then(function(html) {
		console.log('Terminé la petición de Google');
	}).catch(function(err) {
		console.log(err);
	})

// Estados de las promesas
//	fullfiled: la promesa se ejecutó correctamente
//	rejected: la promesa tuvo algún error
// 	pending: la promesa está en proceso
//	setled: la promesa terminó con éxito o con algún error

console.log('Soy la última línea de código');