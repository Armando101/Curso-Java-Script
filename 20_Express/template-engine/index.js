const express = require('express');
const app = express();
const expressJsx = require('./express-jsx');

const port = 8000;

// Recibe una extensión y una función
app.engine('jsx', expressJsx);

app.set("views", "./views");	// Especifica la carpeta de las vistas
app.set("view engine", "jsx");	// Registra el template engine jsx

app.get('/', (req, res) => {
	res.render("index", { hello: 'Hola', world: 'Mundo'});
});

const server = app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${server.address().port}`)
});