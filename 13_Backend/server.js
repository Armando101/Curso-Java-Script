const express = require('express');
const port = 3000;
// import express from 'express'; // Sintaxis de ECMA 6


// Instanciamos la aplicación de express
var app = express();

app.use('/', function(req, res) {
	res.send('Hola');
});


app.listen(port);
console.log('La aplicación está escuchando en http://localhost:'+port);