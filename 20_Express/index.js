const express = require('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
	res.send({'hello': 'world'});
});

const server = app.listen(port, ()=> {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});