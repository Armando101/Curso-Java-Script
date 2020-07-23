function hola(nombre) {
	return new Promise(function(resolve, reject) {
		setTimeout(function () {
			console.log(`Hola ${nombre} Estoy siendo asincrona`);
			resolve('Armando');
		}, 1500);
	});
}

function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Im Talking bla bla bla...');
			// reject('Hay un error');
			resolve(nombre);
		}, 1500);
	});
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

function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Adios ', nombre);
			resolve();
		}, 1000);
	});
}

console.log('Iniciando proceso...');

hola('Armando')
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(adios)
	.then((nombre)=> {
		console.log('Terminado el proceso');
	})
	.catch(error => {
		console.error('Ha habido un error');
		console.error(error);
	});