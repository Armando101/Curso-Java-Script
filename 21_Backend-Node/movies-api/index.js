const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

// Body parser
app.use(express.json());

moviesApi(app);

// Los middlewares de error siempre tienen que ir después de las rutas
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, ()=> {
	console.log(`Listening http://localhost:${config.port}`);
});

