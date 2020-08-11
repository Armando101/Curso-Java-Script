const path = require('path');

// Definimos las entradas y salidas de mi archivo comprimido
module.exports = {
	entry: './index.js',	// Entrada
	output: {	// Salidas
		path: path.resolve(__dirname),	// direccion del archivo de salida
		filename: 'bundle.js'	// nombre del archivo comprimido
	}	
}