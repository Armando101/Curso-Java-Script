// Otra forma de crear promesas es como se muestr a continuación

function dummy() {
	if (Math.floor(Date.now()/1000)%2 == 0)
		return Promise.resolve('Hola mundo');
	return Promise.reject('Error');
}

dummy().then(console.log).catch(console.log);

// Siempre regresará Hola mundo
Promise.resolve('Hola mundo').then(console.log);

// Siempre regresará un error
// Promise.reject('Hola mundo').then();

// Para controlar lo anterior agregamos un catch
Promise.reject('Hola mundo').then(console.log).catch(console.log);
