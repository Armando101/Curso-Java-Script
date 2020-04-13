const helloWorld = ()=> {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();

// No podemos acceder a la variable ya que se encuentra en el scope local de helloWorld
// console.log(hello);

var scope = 'Im Global';

const functionScope = ()=> {
    // scope en este caso está en el scope local
    // No se sobreescribe la variable scope
    // A esto se le conoce como ámbito léxico
    var scope = 'Im just a local';
    const func = ()=> {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);

// El ámbito léxico es que a pesar que tengas una variable global declarada e inicializada
// Puedes tener la misma variable declarada e inicializada con otro valor dentro de una función
// Esta última no reasignará su valor a la variable global.