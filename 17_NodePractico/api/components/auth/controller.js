const bcrypt =require('bcrypt');
const auth = require('../../../auth');
const TABLA = 'auth';

module.exports = function(injectedStore = require('../../../store/dummy')) {
	let store = injectedStore;
	
	async function login(username, password) {
		const data = await store.query(TABLA, { username: username });
		// Comparamos si las passwords son iguales con métodos de criptografía
		return bcrypt.compare(password, data.password)
				.then(sonIguales => {
					if(sonIguales) {
						// Generar token
						// return 'TOKEN';
						return auth.sign(JSON.parse(JSON.stringify(data)));
					} else {
					console.log('Son iguales: ' + sonIguales);
						throw new Error('Infomración inválida')
					}
				});
		// return data;
	}

	async function upsert(data) {
		const authData = {
			id: data.id,
		}
		
		if (data.username) {
			authData.username = data.username;
		}
		if (data.password) {
			// Guardamos la contraseña encriptada
			// Pasamos un número que será el número de veces que se ejecute el algorítmo
			// Un número bueno es entre [5-10]
			authData.password = await bcrypt.hash(data.password, 5);
		}
		
		return store.upsert(TABLA, authData);
	}
	
	return  {
		upsert,
		login,
	}
}
