// Para manejar errores en una promesa usamos bloques try catch

(async function(){

	try {
		let promesa = await Promise.reject('Error');
	} catch(err) {
		console.log(err);
	}

})();