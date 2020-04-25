const store = require('./store');

function addUser(users) {

	if (!users || !Array.isArray(users)) {
		return Promise.reject('No se envió el usuario o no es un array');
	}

	const chat = {
		users: users
	};

	return store.add(chat);
}

function listChats(userId) {
	return new Promise((resoleve, reject) => {
		resoleve(store.list(userId));
	});
}



module.exports = {
	addUser,
	listChats,
};