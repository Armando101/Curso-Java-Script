const fs = require('fs');

const copy = fs.copyFile("Poema.txt", "./DirectorioConJS/PabloNeruda.txt", err => {
	if (err) {
		console.error(err);
	}

	console.log("Poema.txt se copió en PabloNeruda.txt");
});