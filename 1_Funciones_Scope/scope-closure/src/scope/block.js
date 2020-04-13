const fruits = ()=> {
    if (true) {
        // Al estar declarados con var puedo acceder a ellos en cualquier parte de la función
        // Si declaro las variables con let ya no puedo acceder a las variables
        var fruits1 = 'apple';
        var fruits2 = 'bannana';
        var fruits3 = 'kiwi';
    }

    // Con var no hay error, con let sí
    // Var: scope de function
    // let: scope de bloque
    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();

// Imprimirá 1 y luego 2
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);


const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(()=> {
            console.log(i);
        }, 1000);
    }
};

// Si declaro i con var en el for regresa 10 veces el número 10
// Si declaro i con let regresa los números del 0 al 9
anotherFunction();