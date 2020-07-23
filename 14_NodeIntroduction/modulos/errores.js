function otraFuncion() {
	return myError();
}
function myError() {
	return 3 + z;
}

function myErrorAsinchronos(cb) {
	setTimeout(function() {
		try {
			return 3 + z;
		} catch (err) {
			console.error('Error en la funcion asincrona');
			cb(err);
		}
	});
}

try {
	// otraFuncion();
	myErrorAsinchronos(function () {
		console.log('Hay error');
	});
} catch(err) {
	console.error('Whoops, something went wrong');
	console.error(err.message);
	console.log('No pasa nada, el error esta dentro de catch');
}