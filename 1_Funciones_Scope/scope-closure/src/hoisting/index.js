// Lo que hace internamente es que primero declara la variale y después la asigna
// El hoisting es la elevación de las variables
// var a;
// a = 2;

a = 2;
var a;
console.log(a); // 2

// JS sólo aplica el hoisting en las declaraciónes y no en las inicializaciones
// Si ejecuto el siguiente código dará undefined

console.log(b); // Hasta el momento no existe b
var b = 5;  // Como la estoy inicializando no aplica el hoisting

// El motor compila JS antes de ser interpretado
// Lo que hace es que primero coloca en memoria la función y luego la manda llamar
nameOfDog('Elmo');
function nameOfDog(name) {
    console.log(name);
}
