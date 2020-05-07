const fs = require('fs');

function getKeysFromOptions(options) {
	const { settings, _locals, ...objectKeys } = options;
	//console.log('getKeysOptions')

	//console.log(settings)
	//console.log(_locals)
	//console.log(objectKeys)
	return Object.keys(objectKeys);
}

function getRenderedContent(content, options) {
	const keys = getKeysFromOptions(options);
	let contentString = content.toString();
	for (let key of keys) {
		// "gi" indica que lo haga de manera global (no se quede con la primera ocurrencia) y que no distinga entre mayúsculas o minúsculas
		contentString = contentString.replace(new RegExp(`\{${key}\}`, "gi"), options[key]);
	}

	return contentString;
}

function expressJxs(filePath, options, callback) {
	fs.readFile(filePath, (err, content) => {
		if (err) {
			return callback(err);
		}

		const rendered = getRenderedContent(content, options);

		return callback(null, rendered);
	});
}

module.exports = expressJxs;