// Un closure es la combinación de una función y el ámbito léxcio en el cual ha sido declarada dicha función
// Closure: Es una función u objeto con funciones que recuerda el estado de las variabels al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones
// Un closure puede recordar y acceder a variables y argumentos de su función externa incluso después de que la función externa haya finalizado

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

// Yo quiero que guarde los valores, es decir que me muestre 5 y luego 15
// Lo que obtengo es 5 y 10
// Esto lo podemos solucionar declarando la variable saveCoins fuera de la función
// Eso funcionará pero no es buena práctica
// Lo que haremos será usar closures
moneyBox(5);
moneyBox(10);

// Closures
const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    // Regresa una función
    return countCoins;
};

// Guardo la función que regresa
let myMoneyBox = moneyBox2();

// Ejecuto la función
// Recuerda el valor de la variable saveCoins
myMoneyBox(4);
myMoneyBox(10);
myMoneyBox(5);