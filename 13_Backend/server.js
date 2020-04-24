const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = 3000;
// import express from 'express'; // Sintaxis de ECMA 6

// Route es una de las piezas más importantes
// Nos permitirá separa las peticiones por cabeceras, métodos, URL, etc

// bodyParser nos permitirá trabajar con el cuerpo de la petición
// Pasamos el json para indicar que trabaje únicamente con los archivos json recibidos

// Instanciamos la aplicación de express
var app = express();

/* Es importante que app.use(router) lo coloquemos al final  */

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

// Con router podemos separar las peticion por ejemplo por metodos
router.get('/', function(req, res) {
	// Vemos los headers de la petición
	console.log(req.headers);
	// Podemos enviar al cliente headers
	res.header({
		"custom-header": "Nuestra cabecera personalizada"
	});
	res.send('Hola desde GET');
});

router.post('/', function(req, res) {
	// Recogemos información de la petición
	console.log('Body: '+ req.body);
	console.log('Query: '+ req.query);
	res.send('Hola desde POST');
});

router.post('/message', function(req, res) {
	// Podemos distintos tipos de respuestas:
	// Respuesta vacía
	// res.status(200).send();
	// Mensaje
	// res.status(200).send('hola munod');
	// Objetos complejos
	res.status(200).send({"error": "", "body": "Hola desde POST-Message"});
});

/* // Usando una ruta
app.use('/', function(req, res) {
	res.send('Hola');
});
*/

app.listen(port);
console.log('La aplicación está escuchando en http://localhost:'+port);