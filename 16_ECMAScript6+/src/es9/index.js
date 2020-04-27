/******************** Operador de reposo *******************/
// Puede extraer las propiedades de un objeto que aún no ha sido creado

const obj = {
	name: 'Armando',
	age: 22,
	country: 'MX'
}

// ...all toma todos los valores
// si quiero todos menos name, sólo imprimo all
let { name, ...all } = obj;
console.log(name, all);
// console.log(all);


/******************** Propiedades de propagación *******************/
const obj2 = {
	name: 'Armando',
	age: 22
}

const obj3 = {
	...obj2,	// Agrego las propiedades de obj2
	country: 'MX'
}

console.log(obj2);
console.log(obj3);

/******************** Finally *******************/
const helloWorld = (val) => {
	return new Promise((resolve, reject) => {
		(val)
		? setTimeout(()=> resolve('Hello World'), 3000)
		: reject(new Error('Test Error'))
	});
};

helloWorld(true)
	.then(response => console.log(response))
	.catch(error => console.log(error))
	.finally(()=> console.log('Finalizado'));


/******************** Regex *******************/
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

