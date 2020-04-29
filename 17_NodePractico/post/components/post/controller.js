const { nanoid } = require('nanoid');

const TABLA = 'post';

module.exports = function(injectedStore = require('../../../store/dummy')) {
	let store = injectedStore;
	function list() {
		return store.list(TABLA);
	}

	async function upsert(data) {
		const post = {
			text: data.text,
			user: data.user
		}
		if(data.id) {
			post.id = data.id;
		} else {
			post.id = nanoid();
		}

		return store.upsert(TABLA, post);
	}

	return {
		list,
		upsert
	}
}