const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

// Begining function composition
/*
	Conocemos como Function Composition a las funciones que obtenemos como resultado de combinar otras dos o más funciones.
	El resultado de cada función es el argumento de la siguiente y así sucesivamente.
*/

// El objeto que recibe attrsToString es como el siguiente
/*
	{
		tag: 'h1',
		attr: {
			class: 'title',
			id: 'myId'
		}
	}

	// Lo que retorna es:
	tag = "h1" class="title" id="myId"
*/

const attrsToString = (obj = {}) => {
	const keys = Object.keys(obj);
	const attrs = [];

	for(let i=0; i<keys.length; i++) {
		let attr = keys[i];
		attrs.push(`${attr}="${obj[attr]}"`);
	}

	const string = attrs.join('');
	return string;
}; 

const tag = t => content => `<${t}>${content}</${t}>`;

console.log(tag('h1')('title'));
console.log(attrsToString({class: 'title'}));

// End function composition

const description = document.getElementById('description');
const calories = document.getElementById('calories');
const carbs = document.getElementById('carbs');
const protein = document.getElementById('protein');

let list = [];

description.onkeypress = () => {
	description.classList.remove('is-invalid');
}
calories.onkeypress = () => {
	calories.classList.remove('is-invalid');
}
carbs.onkeypress = () => {
	carbs.classList.remove('is-invalid');
}
protein.onkeypress = () => {
	protein.classList.remove('is-invalid');
}

const add = () => {
	const newItem = {
		description: description.value,
		calories: parseInt(calories.value),
		carbs: parseInt(carbs.value),
		protein: parseInt(protein.value)
	}
	list.push(newItem);
	console.log(list);
}
	
const cleanInputs = () => {
	description.value = '';
	calories.value = '';
	carbs.value = '';
	protein.value = '';
}

const validateInputs = () => {

	description.value ? '' : description.classList.add('is-invalid');
	calories.value ? '' : calories.classList.add('is-invalid');
	carbs.value ? '' : carbs.classList.add('is-invalid');
	protein.value ? '' : protein.classList.add('is-invalid');

	if(description.value && calories.value && carbs.value && protein.value) {
		// console.log('Everything is OK');
		add();
		cleanInputs();
	}


}