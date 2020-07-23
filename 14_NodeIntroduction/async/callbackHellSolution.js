function hola(nombre, callback) {
	setTimeout(function () {
		console.log(`Hola ${nombre} Estoy siendo asincrona`);
		callback('Armando');
	}, 1500);
}

function hablar(callback) {
	setTimeout(function() {
		console.log('Im Talking bla bla bla...');
		callback();
	}, 1500);
}

function conversacion(nombre, times, callback) {
	if (times > 0 ) {
		hablar(function() {
			conversacion(nombre, --times, callback)
		});
	} else {
		adios(nombre, callback);
	}
}

function adios(nombre, callback) {
	setTimeout(function() {
		console.log('Adios ', nombre);
		callback();
	}, 1000);
}

console.log('Iniciando proceso...');
hola('Armando', function(nombre) {
	conversacion(nombre, 3, function() {
		console.log('Proceso terminado');
	});
});