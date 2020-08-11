const path = require('path');

// Definimos las entradas y salidas de mi archivo comprimido
module.exports = {
	entry: path.resolve(__dirname, 'index.js'),	// Entrada
	mode: 'production',	// Modo de transpilacion
	output: {	// Salidas
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'	// nombre del archivo comprimido
	}	
}