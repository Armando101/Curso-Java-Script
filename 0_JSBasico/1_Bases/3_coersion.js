// Existen dos tipos
// Coersiones impícitas y explícitas
// Las ímplicitas es cuando el lenguaje nos ayuda y cambio el tipo de dato a otro
// Es la forma en la que podemos cambiar un tipo de dato a otro

// Podemos cambiar un tipo número a un string

var a = 4 + '7';
console.log(a);
console.log(typeof(a));

var a = 4 * '7';
console.log(a);
console.log(typeof(a));

// La cohersión explícita es cunado forzamos a cambiar un tipo de dato a otro si necesitamos que sea de cierto tipo

var a = 20;
var b = a + '';
console.log(b);
console.log(typeof(b));

// Cambiamos el tipo de manera explícita
var c = String(a);
var d = Number(c);

var e = Boolean(a);
console.log(e);