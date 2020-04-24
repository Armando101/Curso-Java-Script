const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const port = 3000;

const response = require('./network/response');

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
	// res.send('Hola desde GET');
	response.succes(req, res, 'Lista de mensajes');
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
	// res.status(201).send({"error": "", "status": "Mensaje creado", "Mensaje": req.body});

	response.succes(req, res, "Mensaje creado", 201);
});

router.post('/error', function(req, res) {
	console.log(req.query);
	if (req.query.error == 'ok') {
		response.error(req, res, 'Error inesperado', 500, 'Es sólo una simulación de errores');
	} else {
		response.succes(req, res, 'Creado coorrectamente', 201);
	}
});

// Podemos servir archivos estáticos
// Por convención se guardan en una carpeta public
// Acedemos asi: localhost:3000/app/css/style.css
app.use('/app', express.static('public'));

/* // Usando una ruta
app.use('/', function(req, res) {
	res.send('Hola');
});
*/

app.listen(port);
console.log('La aplicación está escuchando en http://localhost:'+port);