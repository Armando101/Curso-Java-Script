const util = require('util');

// Util para indicar que un paquete o función está depreciado
const helloPluto = util.deprecate(()=> {
	console.log('Hello Pluto');
}, 'Pluto is deprecated. It is not a planet anymore');

helloPluto();