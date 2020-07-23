let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);
// Ejecucion
// NOMBRE=Armando WEB=armando.com node entorno.js