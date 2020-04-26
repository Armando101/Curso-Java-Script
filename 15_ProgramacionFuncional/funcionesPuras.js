// Funciones puras

/*
	Las funciones puras siempre devuelven el mismo resultado cuando reciben los mismos parámetros. En cambio, otras funciones que dependen de factores externos (como el tiempo o una petición HTTP) no siempre pueden devolver el mismo resultado aunque reciban los mismos parámetros, incluso, pueden no necesitar recibir parámetros para ejecutarse correctamente.
*/

// Función pura
const double = x => x * 2;
console.log(double(5));

const isGraterThan = (value1, value2) => value1 > value2;
console.log(isGraterThan(5, 6));

// Función impura
const time = ()=> new Date().toLocaleTimeString();

console.log(time());
