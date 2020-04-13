// Al declara una variable con var podemos acceder a ella desde cualquier lugar
// Esto se debe a que está en el scope global
// Estas variables están declaradas en el scope global

// Podemos sobreescribir los valores de var
// No podemos sobreescribir los valores de let ni de const

var hello = 'Hola';
let world = 'Hello World';
const helloWorld = 'Helo World!!';

const anotherFunction = ()=> {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld2 = () => {
    // Si no coloco ninguna palabra reservada se declara en el scope global
    // Si declaro con var también se asigna en el scope global
    globalVar = 'Im global';
}

helloWorld2();
console.log(globalVar);
