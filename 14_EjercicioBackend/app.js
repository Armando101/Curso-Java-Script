// Dependencies
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const multipart = require('connect-multiparty');
const cors = require('cors');
const bodyParser = require('body-parser');
// Express configuration
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: false}));
app.use(bodyParser.json({ limit: '2omb', extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cors('*', cors()));

// Port configuration
const mysql = require('mysql');
const port = 8081;
app.listen(port, function() {
	console.log('Listo para trabajar en http://localhost:'+ port);
});


// Headers configuration
app.use((req, res, next) => {
	res.header('Acces-Control-Allow-Origin', '*');
	res.header('Acces-Control-Allow-Origin', 'Access-Control-Allow-Headers',
				'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Acces-Control-Request-Method, enctype, Authorizaton');
	res.header('Acces-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
	res.header('Allow', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');

	next();
});

// Message error configuration
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});

// app Export
module.exports = app;