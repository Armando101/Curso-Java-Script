const os = require('os');

// Arquitectura
console.log(os.arch());

// Plataforma
console.log(os.platform());

// CPUs
console.log(os.cpus());

// Constantes
console.log(os.constants);


// Memoria
console.log(os.freemem());

const SIZE = 1024;
function kb(bytes) {
	return bytes / SIZE;
}

function mb(bytes) {
	return kb(bytes) / SIZE;
}

function gb(bytes) {
	return mb(bytes) / SIZE;
}

console.log(kb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

// Directorios
console.log(os.homedir());

console.log(os.tmpdir());

console.log(os.hostname());

console.log(os.networkInterfaces());