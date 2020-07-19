/***************************    Funciones *******************/

// Funciones declarativas
function twoTimes(num = 10) {
    return num * 2;
}

// Function de expresion
const addTwo = function(num = 10) {
    return num + 2;
}

/*
const addTwo = (num = 10) => {
    return num + 2;
}
*/

// const addTwo = (num = 10) => num + 2;

/* Funciones puras
        Devuelven el mismo resultado cuando son los mismos parametros
    
    Funciones impuras:
        Devuelven resultados distintos a pesar de recibir lo mismo
*/

// Funcion pura
// const addTwo = (num = 10) => num + 2;

// Funcion impura
const time = () => new Date().toLocaleTimeString();
console.log(time());


/********       Scope de funciones     ******/

/*
    El scope es el alcance de las variables
*/

/* Scope global */
var name = 'Armando';

function myFunction() {
    console.log(name);
}

function otherFunction() {
    lastname = 'Rivera'; // Se guarda en el scope global
    const countrie = 'Mexico'; // Scope local, no se puede acceder a este valor fuera de la variable
}

myFunction();
otherFunction();
console.log(lastname);

/* Ambito lexico: no se sobreescriben las variables globales si se redefinen dentro de un scope local */

function scopeFunction() {
    var name = 'Jorge';
    console.log(name); // Jorge
}
scopeFunction();
console.log(name); // Armando, no se sobreescribe

/* Scope de bloque */

function age(num = 18) {
    let message; // Si omito esta linea no funciona ya que message solo vive dentro del bloque if o else
    if (num >= 18) {
        message = 'You are adult';
    } else {
        message = 'You are a child';
    }
    console.log(message);
}

age();

/* Nested functions */
// Son funciones dentro de otras funciones

/*
const myFunction1 = () => {
    let i = 1;

    const nestedFunction = () => console.log(i);
    nestedFunction();
}

myFunction1();
*/

// Un clousure permite recordar variables declaradas en un scope superior
// Cuándo encuentro un closure?
// Debemos tener una nested function
// La nested function debe referenciar un valor de un scope superior
// La función que envuelve debe retornar la nested function

const myFunction1 = () => {
    let i = 1;

    nestedFunction = () => console.log(i);
    return nestedFunction;
}

myNestedFunction = myFunction1();
myNestedFunction();

const counter = (i) => {
    let count = i;

    function sum() {
        return count++;
    }

    return sum;
}

myCounter = counter(1);
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());


/* Uso practico de clousures */
function makeMultiplier(x) {
    function multiplier(n) {
        return x * n;
    }
    return multiplier;
}
// const makeMultiplier = (x) => multiplier = (n) => x * n;

times10 = makeMultiplier(10);
times8 = makeMultiplier(8);

console.log(times10(10));
console.log(times8(10));

/* Objetos con clousures */

const pet = () => {
    let name;
    let age;

    return {
        getName: () => name,
        setName: (setName) => name = `Woof Woof my name is ${setName}`,

        getAge: () => age,
        setAge: (setAge) => age = `I'm  ${setAge} years old`,

        getInfo: () => `Welcome to my clousure app, let me introduce myself ${name} ${age}`
    }

}

myPet = pet();
myPet.setName('Firulais');
myPet.setAge(5);
// console.log(myPet.name());
console.log(myPet.getName());
console.log(myPet.getAge());

console.log(myPet.getInfo());

// Iteradores

// Un iterador es cualquier objeto que implemente un metodo next que retorne un objeto con una propiedad value y una done

/* Even numbers */

const evenNumbers = {
    n: 0,
    next() {
        return result = { value: this.n += 2, done: false };
    },

    /*
    next: () => {
        return result = this.n += 2;
    }
    */
}

console.log(evenNumbers.next());
console.log(evenNumbers.next());
console.log(evenNumbers.next());


// Generadores

function* myGenerator() {
    yield 'Hello';
    yield 'World';
}

myGenerator = myGenerator();
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());

/*
function* genEvenNumber() {
    for (let i = 0; i<100; i += 2) {
        yield i
    }
}
*/

function* genEvenNumber() {
    for (let i = 0; true; yield i += 2);
}

myEvenGenerator = genEvenNumber();

console.log(myEvenGenerator.next());
console.log(myEvenGenerator.next());
console.log(myEvenGenerator.next());
console.log(myEvenGenerator.next());
console.log(myEvenGenerator.next());
console.log(myEvenGenerator.next());

function* fibonacci(max = null) {
    let n1 = 1;
    let n2 = 1;
    let counter = 0;

    while (!max || counter < max) {
        if (counter <= 1) {
            counter += 1;
            yield n1;
        } else {
            let aux = n1 + n2;
            n1 = n2;
            n2 = aux;
            counter += 1;
            yield aux;
        }
    }
}

for (let i of genEvenNumber()) {
    console.log(i);
}