const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');
const productsAPIRouter = require('./routes/api/products');
const authApiRouter = require('./routes/api/auth');
const bodyParser = require('body-parser');
const boom = require('@hapi/boom');
const {
	logErrors,
	wrapErrors,
	clientErrorHandler,
	errorHandler
} = require('./utils/middlewares/errorsHandlers');
const isRequestAjaxOrApi = require('./utils/isRequestAjaxOrApi');
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
app.use('/api/auth', authApiRouter);

// La ruta raíz nos redirecciona al la página principal que es products
app.get('/', (req, res) => {
	res.redirect('/products');
});

// Este middleware se manda llamar hasta el final, si no se ejecutó ninguno anterior significa que el recurso no se encontró
app.use(function(req, res, next) {
	if (isRequestAjaxOrApi(req)) {
		const {
			output: { statusCode, payload }
		} = boom.notFound()

		res.status(statusCode).json(payload);
	}

	res.status(404).render('404');
});

// error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

// app.use(express.urlencoded({extended: false}));	// Remplazo de body-parser

// Server
const server = app.listen(port, ()=> {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});