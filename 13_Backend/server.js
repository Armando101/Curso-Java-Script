const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const config = require('./components/message/config');
const router = require('./network/routes');
const port = 3000;

db(config.connection);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

// Podemos servir archivos estáticos
// Por convención se guardan en una carpeta public
// Acedemos asi: localhost:3000/app/css/style.css
app.use('/app', express.static('public'));

server.listen(port, function() {
	console.log('La aplicación está escuchando en http://localhost:'+ port);
});