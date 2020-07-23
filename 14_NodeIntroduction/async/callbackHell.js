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

function adios(nombre, callback) {
	setTimeout(function() {
		console.log('Adios ', nombre);
		callback();
	}, 1000);
}

console.log('Iniciando proceso...');
hola('Armando', function(nombre) {
	hablar(function() {
		hablar(function() {
			hablar(function() {
				adios(nombre, function() {
					console.log('Terminando proceso...');
				});
			});
		});
	});
});
