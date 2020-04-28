const auth = require('../../../auth');
const TABLA = 'auth';

module.exports = function(injectedStore = require('../../../store/dummy')) {
	let store = injectedStore;
	
	async function login(username, password) {
		const data = await store.query(TABLA, { username: username });
		if(data.password === password) {
			// Generar token
			// return 'TOKEN';
			return auth.sign(data);
		} else {
			throw new Error('Infomración inválida')
		}
		// return data;
	}

	function upsert(data) {
		const authData = {
			id: data.id,
		}
		
		if (data.username) {
			authData.username = data.username;
		}
		if (data.password) {
			authData.password = data.password;
		}
		
		return store.upsert(TABLA, authData);
	}
	
	return  {
		upsert,
		login,
	}
}
