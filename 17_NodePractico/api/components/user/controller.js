// const store = require('../../../store/dummy');
const { nanoid } = require('nanoid');
const auth = require('../auth'); // Llama directamente al index
const TABLA = 'user';

// Exportamos contrller como una función para pasarle la base de datos con la que va a trabajar
// Esto es útil porque nos permite cambiar de base de datos sin modificar el código
// Sólo cambiamos la variable store de index.js
module.exports = function(injectedStore = require('../../../store/dummy')) {
	let store = injectedStore;
	function list() {
		return store.list(TABLA);
	}

	function get(id) {
		return store.get(TABLA, id);
	}

	async function upsert(data) {
		const user = {
			name: data.name,
			username: data.username
		}
		if(data.id) {
			user.id = data.id;
		} else {
			user.id = nanoid();
		}

		if (data.password || data.username) {
			await auth.upsert({
				id: user.id,
				username: user.username,
				password: data.password,
			})
		}
		//console.log(user.id);
		return store.upsert(TABLA, user);
	}

	function remove(id) {
		return store.remove(TABLA, id);
	}
	return  {
		list,
		get,
		upsert,
		remove
	}
}
