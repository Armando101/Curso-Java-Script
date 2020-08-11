const path = require('path');

// Definimos las entradas y salidas de mi archivo comprimido
module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	mode: 'development',	// Modo de transpilacion
	output: {	// Salidas
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'	// nombre del archivo comprimido
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
				'style-loader',	// Inyecta el codigo css
				'css-loader'	// Interpreta el codigo css
				]
			}
		]
	}
}