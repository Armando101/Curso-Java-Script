// La promesa se resuelve correctamente cuando se ejecuta la función resolve
// La promesa falla si se ejecuta la función reject

const somethingWillHappen = ()=> {
    return new Promise((resolve, reject) => {
        if (true) {
            // Cuando ejecuto la función then, response toma el valor que le paso a resolve
            // En este caso es "Hey!!!"
            resolve('Hey!!!');
        } else {
            reject('Whoops!!!');
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(()=> {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error ('Whoops!!!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


// Promise.all me permite ejecutar varias promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results: ', response)
    })
    .catch(err => {
        console.error(err);
    });