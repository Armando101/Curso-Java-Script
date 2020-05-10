const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies');

moviesApi(app);
app.use('/api/movies', moviesApi);


app.listen(config.port, ()=> {
	console.log(`Listening http://localhost:${config.port}`);
});

