const store = require('./store');

function addUser(name) {

	if (!name) {
		return Promise.reject('Invalid name');
	}

	const user = {
		name
	};

	return store.add(user);
}

function getUsers(filterName) {
	return new Promise((resoleve, reject) => {
		resoleve(store.list(filterName));
	});
}

/*
function updateMessage(id, message) {
	return new Promise( async (resolve, reject) => {
		if (!id || !message) {
			reject('Invalid data');
			return false;
		}
		const result = await store.updateText(id, message);
		resolve(result);
	});
}

function deleteMessage(id) {
	return new Promise((resoleve, reject) => {
		if (!id) {
			reject('Id inváldo');
			return false;
		}
		store.remove(id)
		.then(()=> {
			resoleve();
		})
		.catch((err) => {
			reject(e);
		});
	})
}
*/

module.exports = {
	addUser,
	getUsers,
/*
	updateMessage,
	deleteMessage
*/
};