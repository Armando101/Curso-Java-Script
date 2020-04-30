// const store = require('../../../store/dummy');
const { nanoid } = require('nanoid');
const auth = require('../auth'); // Llama directamente al index
const TABLA = 'user';

// Exportamos contrller como una función para pasarle la base de datos con la que va a trabajar
// Esto es útil porque nos permite cambiar de base de datos sin modificar el código
// Sólo cambiamos la variable store de index.js
module.exports = function(injectedStore = require('../../../store/dummy'), injectedCache = require('../../../store/dummy')) {
	
	let store = injectedStore;
	let cache = injectedCache;
	
	async function list() {
		let users = await cache.list(TABLA);
		if (!users) {
			console.log('No estaba en cache. Buscando en Base de Datos...')
			users = await store.list(TABLA);
			cache.upsert(TABLA, users);
		} else {
			console.log('Nos traemos datos desde cahe');
		}

		return users;
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
			});
		}
		return store.upsert(TABLA, user);
	}

	function remove(id) {
		return store.remove(TABLA, id);
	}

	function follow(from, to) {
		return store.upsert(TABLA + '_follow', {
			user_from: from,
			user_to: to,
		});
	}

	async function following(id) {
		const join = {};
		join[TABLA] = 'user_to';  // { user: 'user_to' }
		const query = { user_from: id }
		return await store.query(TABLA + '_follow', query, join);
	}

	return  {
		list,
		get,
		upsert,
		remove,
		follow,
		following
	}
}
