const fs = require('fs');

try {
	const file = process.argv[2];	// [0] node, [1] scriptName, [2] fileName

	const content = fs.readFileSync(file).toString();

	const lines = content.split('\n').length;
	console.log(lines);
} catch(err) {
	return console.error(err);
}

console.log('Este es el final del script');