const express = require('express');
const port = 3000;
// import express from 'express'; // Sintaxis de ECMA 6

// Route es una de las piezas más importantes
// Nos permitirá separa las peticiones por cabeceras, métodos, URL, etc
const router = express.Router();

// Instanciamos la aplicación de express
var app = express();

app.use(router);

// Con router podemos separar las peticion por ejemplo por metodos
router.get('/', function(req, res) {
	res.send('Hola desde GET');
});

router.post('/', function(req, res) {
	res.send('Hola desde POST');
});

/* // Usando una ruta
app.use('/', function(req, res) {
	res.send('Hola');
});
*/

app.listen(port);
console.log('La aplicación está escuchando en http://localhost:'+port);