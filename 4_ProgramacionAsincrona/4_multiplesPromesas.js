
// setTimeout manda a llamar a resolve después de 500ms, el tercer argumento es el que se le mando a resolve como resultado de la promesa

let p1 = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hola mundo'));
let p2 = new Promise((resolve, reject)=> setTimeout(resolve, 600, 'Segundo Hola mundo'));

//let p3 = Promise.reject();

let saluda = () => console.log('Hola a todos');

// Mando como argumento a then la función que quier que se ejecute si la promesa fue exitosa
// Si la promesa fue exitosa se ejecuta la función console.log y como argumento recive el tercer parámetro de setTimeout
p1.then(console.log);

// Promise.all recibe como argumento un iterable, un arreglo de promesas
// falla en caso de que alguna de las promesas falle

Promise.all([p1, p2]).then(resultados => {
	console.log(resultados);
	saluda();
}).catch(()=> console.log("Falle :("));