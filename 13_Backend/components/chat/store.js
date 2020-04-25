const Model = require('./model');


function addChat(chat) {
	const mychat = new Model(chat);
	return mychat.save();
}

function listChat(userId) {
	return new Promise((resolve, reject) => {
		let filter = {};
		if (userId) {
			filter = {
				users: userId
			}
		}

		Model.find(filter)
			.populate('users')
			.exec((err, populated) => {
				if (err) {
					reject(err);
					return false;
				}

				resolve(populated);
			});
	})
}


module.exports = {
	add: addChat,
	list: listChat,
/*
	updateText: updateText,
	remove: removeMessage
*/
}