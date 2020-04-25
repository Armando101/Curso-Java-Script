const express = require('express');
const bodyParser = require('body-parser'); 
const db = require('./db');
const config = require('./components/message/config');
const router = require('./network/routes');
const port = 3000;

db(config.connection);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);
router(app);

// Podemos servir archivos estáticos
// Por convención se guardan en una carpeta public
// Acedemos asi: localhost:3000/app/css/style.css
app.use('/app', express.static('public'));

app.listen(port);
console.log('La aplicación está escuchando en http://localhost:'+port);