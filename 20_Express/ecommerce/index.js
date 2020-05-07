const express = require('express');
const app = express();
const path = require('path');
const productsRouter = require('./routes/products');
const port = 8000;

// Definimos la ruta de los archivos estáticos
app.use("/static", express.static(path.join(__dirname, "public")));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use('/products', productsRouter);


const server = app.listen(port, ()=> {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});