const path = require('path');

// Definimos las entradas y salidas de mi archivo comprimido
module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
		precios: path.resolve(__dirname, 'src/js/precios.js'),
		contacto: path.resolve(__dirname, 'src/js/contacto.js')	
	},
	mode: 'development',	// Modo de transpilacion
	output: {	// Salidas
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'	// nombre del archivo comprimido
	}	
}