const fs = require('fs');

// recursive me permite crear directorios dentro de direcorios que no existen y los crea
const mkdir = fs.mkdir("./DirectorioConJS", { recursice: true}, err => {
	if (err) {
		return console.log(err);
	}
});