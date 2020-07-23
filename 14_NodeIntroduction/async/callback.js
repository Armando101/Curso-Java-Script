function soyAsincrona(nombre, callback) {
	setTimeout(function () {
		console.log(`Hola ${nombre} Estoy siendo asincrona`);
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
soyAsincrona('Armando', function() {
	adios('Armando', function() {
		console.log('Terminando proceso...');
	});
});
