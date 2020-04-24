const express = require('express');
const bodyParser = require('body-parser'); 
// const router = express.Router(); // Lo quitamos ya que lo importaremos
const router = require('./network/routes');
const port = 3000;


// Route es una de las piezas más importantes
// Nos permitirá separa las peticiones por cabeceras, métodos, URL, etc

// bodyParser nos permitirá trabajar con el cuerpo de la petición
// Pasamos el json para indicar que trabaje únicamente con los archivos json recibidos

// Instanciamos la aplicación de express
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);
//console.log(typeof(router));
router(app);

// Podemos servir archivos estáticos
// Por convención se guardan en una carpeta public
// Acedemos asi: localhost:3000/app/css/style.css
app.use('/app', express.static('public'));

app.listen(port);
console.log('La aplicación está escuchando en http://localhost:'+port);