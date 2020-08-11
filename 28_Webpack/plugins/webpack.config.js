const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
					{
						loader: MiniCSSExtractPlugin.loader // extrae el css, la manera en como lo va a tratar se indica en plugins
					},
				'css-loader'	// Interpreta el codigo css
				]
			}
		]
	},


	plugins: [
		new HtmlWebpackPlugin({	// Esto genera un html
			title: 'Home'
		}),
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css'
		})
	]
}