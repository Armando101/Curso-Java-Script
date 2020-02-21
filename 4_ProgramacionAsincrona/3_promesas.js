// Declaro una función que regrese una promesa

// El constructor Promise nos permite crear nuevas promesas
// Pasamos al constructor una función llamada executor
// Esta función recibe dos funciones como argumentos
// Estas funciones pueden resolver o rechazar una promesa
// resolve: se ejecuta cuando la promesa terminó y fue exitosa, recibe como argumento el resultado que queremos enviar de la petición
// reject: se manda a llamar cuando hubo un error en la promesa

const request = require('request');

function asincrono() {
	// 
	return new Promise(function(resolve, reject) {
		resolve('Todo salión bien');

		reject(new Error('No se pudo completar'));
	});
}

function leer(url) {
	return new Promise(function(resolve, reject) {

	// Función asíncrona
		request(url, function(error, response) {
			if(error) {
				reject(error);
			}else {
				resolve(response);
			}
		});

	});
}

leer('https://google.com')
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.log(error);
	});