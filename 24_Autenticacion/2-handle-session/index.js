const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
	// Para que no guarde la cookie cada vez que haya un cambio, a veces es necesaria para que aunque no haya un cambio de sesión siempre se guarde
	resave: false,
	saveUnitilalized: false, // Si no se ha inizializado la cookie no me la guarde por defecto
	secret: "keyboard cat"
}));

app.get('/', (req, res) => {
	console.log(req.session);
	req.session.count = req.session.count ? req.session.count + 1 : 1;
	res.status(200).json({ hello: 'world', counter: req.session.count });
});

app.listen(3000, ()=> {
	console.log('Listenting at http://localhost:3000');
});