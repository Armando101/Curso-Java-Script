const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
// Body parser
app.use(express.json());

// Routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);	// Importante situarlo después de las rutas

// Los middlewares de error siempre tienen que ir después de las rutas
// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);	// Importante que vaya en medio
app.use(errorHandler);

app.listen(config.port, ()=> {
	console.log(`Listening http://localhost:${config.port}`);
});
