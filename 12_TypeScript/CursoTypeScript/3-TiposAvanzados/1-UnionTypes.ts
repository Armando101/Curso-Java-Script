/*
	Union Types, los usamos con el caracter |
	- Sirven para indicar que una variables puede ser de más de un tipo de dato
*/

// Digo que age puede ser un number o una string
let age: number | string;

age: 20;
age: 'hello';

age.toString();