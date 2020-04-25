const Model = require('./model');


function addUser(user) {
	const myUser = new Model(user);
	return myUser.save();
}

async function getUsers(filterName) {
	let filter = {};
	if (filterName !== null) {
		filter = {name: filterName}
	}
	// Buscamos los usuarios que coincidan
	const users = await Model.find(filter);
	return users;
}

/*
async function updateText(id, message) {
	const foundMessage = await Model.findOne({
		_id: id,
	});

	foundMessage.message = message;
	const newMessage = await foundMessage.save();
	return newMessage;
}

function removeMessage(id) {
	return Model.deleteOne({
		_id: id
	});
}
*/

module.exports = {
	add: addUser,
	list: getUsers,
/*
	updateText: updateText,
	remove: removeMessage
*/
}