const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');
const productsAPIRouter = require('./routes/api/products');
const port = 8000;

// app
const app = express();

// Definimos la ruta de los archivos estáticos
app.use("/static", express.static(path.join(__dirname, "public")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Routes
app.use('/products', productsRouter);
app.use('/api/products', productsAPIRouter)

// La ruta raíz nos redirecciona al la página principal que es products
app.get('/', (req, res) => {
	res.redirect('/products');
});

app.use(express.json());	// Remplazo de body-parser

// Server
const server = app.listen(port, ()=> {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});