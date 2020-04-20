const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve('Do something Async'), 3000)
        : reject(new Error('Test Error'));
    });
}

// El await inidca que voy a espera a que termine la promesa para ejecutar el código que viene después
const doSomething = async ()=> {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before1');
doSomething();
console.log('After1');

const anotherFunction = async()=> {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error)
    }
}
console.log('Before2');
anotherFunction();
console.log('After2');