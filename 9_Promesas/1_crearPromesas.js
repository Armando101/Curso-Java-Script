
// Declaramos una función de manera síncrona
function im_async() {
	return "Hola promesas";
}

let message = im_async();
console.log(message);

// Utilicemos setTimeout
// No podemos hacer lo siguiente porque no regresaría el mensaje
// setTimeout no regresa lo que regresa su función
// let message = setTimeout(im_async, 2000);

// Declaramos una promesa
// Pasamos una función a la cual llamamos executor
// El método resolve se ejecuta cuando se ejecutó correctamente la promesa
// El método reject se ejecuta cuando se ejecutó incorrectamente la promesa

let promesa = new Promise(function(resolve, reject) {
	setTimeout(function() {
		return resolve("Hola promesa");
		reject(new Error('Hubo un error'));
	}, 2000);
});

// Ejecutamos la promesa
// promesa.then(console.log).catch(console.log);
// Otra alternativa a la línea anterior es al siguiente:
promesa.then(function(resultado){
	console.log(resultado);
}, function(error) {
	console.log('Algo saló mal');
	console.log(error);
})

// Una promes puede estar en estados:
// pendiente: que aún no acaba
// cumplido: la operación se completó de manera exitosas
// rechazado: la operación de la promesa falló