const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const mysql = require('./network');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Rutas

app.use('/', mysql);

app.listen(config.cacheService.port, ()=> {
	console.log('Servicio de caché redis escuchando en http://localhost:' + config.cacheService.port);
});