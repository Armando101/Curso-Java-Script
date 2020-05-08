const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');
const productsAPIRouter = require('./routes/api/products');
const bodyParser = require('body-parser');
const {
	logErrors,
	clientErrorHandler,
	errorHandler
} = require('./utils/middlewares/errorsHandlers');
const port = 8000;

// app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

// error handlers
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// app.use(express.urlencoded({extended: false}));	// Remplazo de body-parser

// Server
const server = app.listen(port, ()=> {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});