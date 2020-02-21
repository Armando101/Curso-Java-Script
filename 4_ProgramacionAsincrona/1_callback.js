// Instalación de request
// npm install request
/*
	Un callback es una función que se pasa como argmento a una operación asíncrona con la expectativa de que dicha función será ejecutada cuando la operación termine.
*/

const request = require('request');

// La función es un callback ya que se ejecuta al terminar la petición a Google.
// Al ser una operación anónima no se bloquea el flujo de código en este punto sino que continua.
request('https://google.com', function(){
	console.log('Terminé la petición de Google');
});

// La siguiente línea se ejecuta a pesar de que aún no haya terminado de ejecutarse el bloque de código anterior
console.log('Yo voy después en el código de la petición a Google');