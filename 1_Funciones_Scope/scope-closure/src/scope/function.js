const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();

const anotherFunction = ()=> {
    // Podemos ver que puedo reasignar variables con var pero con let no
    var x = 1;
    var x = 2;
    // Aquí marcaría un error
    let y = 1;
    //let y = 2;

    console.log(x);
    console.log(y);
}

// Es mejor no declaran variables con var porque las podemos sobreescribir por error

anotherFunction();