const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };

    return displayCount;
}

// Al regresar la función estoy declarando un nuevo closure
// Este closure recordará el valor de count
const myCount = buildCount(1);
myCount();
myCount();
myCount();

// Regresa 1, 2, 3

// Declaro un nuevo closure empezando en 10
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

// Si vuelvo a lla mar a myCount() obtengo un 4
// Esto se debe a que myCount y myOtherCount tienen closures distintos
// Por lo tanto tendrán un valor diferente vara cada variable count
myCount();