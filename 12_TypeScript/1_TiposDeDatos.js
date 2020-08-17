// Indicamos el tipo de dato después de dos puntos
var a = 'Hola';
// Si querremos asignar un tipo de dato diferente nos marcará un error
// a = 5;
// Si no indicamos el tipo de dato se le conoce como type inference
// Esto es, TS asigna el tipo de dato según lo que se ha asignado
var hola = 'Hola';
// hola = 5; // Esto marca un error a pesar de que no indicamos el tipo de dato
var b = 10;
b = 2;
var num1 = 10;
var num2 = 20;
b = num1 + num2;
/********** Funciones *************/
function suma(num1, num2) {
    return num1 + num2;
}
// El tipo de dato any nos permite asignar cualquier valor
var c = suma(num1, num2);
var dniNumber = 123;
