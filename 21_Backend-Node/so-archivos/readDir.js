const fs = require('fs');

// Leee lso archivos que tengo en este directorio
const files = fs.readdir(__dirname, (err, files)=> {
	if (err) {
		return console.log(err);
	}

	console.log(files);
});
