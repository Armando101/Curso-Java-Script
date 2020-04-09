// Indicamos el tipo de dato después de dos puntos
let a: string = 'Hola';

// Si querremos asignar un tipo de dato diferente nos marcará un error
// a = 5;

// Si no indicamos el tipo de dato se le conoce como type inference
// Esto es, TS asigna el tipo de dato según lo que se ha asignado
let hola = 'Hola';
// hola = 5; // Esto marca un error a pesar de que no indicamos el tipo de dato

let b: number = 10;
b = 2;

const num1 = 10;
const num2 = 20;

b = num1 + num2;

/********** Funciones *************/

function suma(num1: number, num2: number): number {
    return num1 + num2;
}

// El tipo de dato any nos permite asignar cualquier valor

const c = suma(num1, num2);

// Type keyword
// type nos permite asignar un alias a un tipo de dato
// Esto es útil semánticamente
// Si 

type dny = number;

let dniNumber: dny = 123;