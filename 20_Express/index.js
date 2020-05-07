const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
	const person = {
		"name": "Armando",
		"apellido": "Rivera",
		"age": "22",
		"country": "MX"
	}
	res.send(person);
});

const server = app.listen(port, ()=> {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});