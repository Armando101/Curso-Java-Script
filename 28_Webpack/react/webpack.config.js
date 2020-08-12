const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Para que el servidor se quede escuchando ejecutamos
// npm run build:dev -- -w
// Si incluimos webpack-dev-server no es necesario -- -w
module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	mode: 'development',	// Modo de transpilacion
	output: {	// Salidas
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'	// nombre del archivo comprimido
	},
	devServer: {
		hot: true,
		open: true,	// Abre el navegador automaticamente
		port: 9090	// Indico el puerto
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'	// Interpreta el codigo css
				]
			}
		]
	},


	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({	// Esto genera un html
			title: 'webpack-dev-server',
			template: path.resolve(__dirname, 'index.html')
		})
	]
}