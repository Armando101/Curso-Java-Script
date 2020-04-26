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
		attrs: {
			class: 'title',
			id: 'myId'
		}
	}

	// Lo que retorna es:
	tag = "h1" class="title" id="myId"
*/

/*
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
*/

// El paradigma declarativo trata de explicar que hay que hacer en lugar de cómo hacerlo

// función attrsToString de manera declarativa
const attrsToString = (obj = {}) => 
	Object.keys(obj)
	.map(items => `${items}="${obj[items]}"`).join('');

const tagAttrs = obj => (content = "") => 
				`<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`;

/*
const tag = t => {
	if (typeof t === 'string') {
		return tagAttrs({tag: t});
	}
	return tagAttrs(t);
}
*/

// Función tag de manera declarativa
const tag = t => 
	typeof t === 'string' ? tagAttrs({ tag: t }) : tagAttrs(t);

// const tag = t => content => `<${t}>${content}</${t}>`;

// console.log(tag('h1')('title')); // <h1>title</h1>
console.log(attrsToString({class: 'title', id:'myId'})); // class="title"id="myId" 
console.log(tagAttrs({tag: 'h1', attrs:{class:'title'}})('Title'));
// <h1 class="title">Title</h1>

// End function composition
const tableCell = tag('td');
const tableCells = items => items.map(tableCell).join('');

// trashIcon genera el ícono de basura
// <i class = 'fa fa-trash-alt'></i>
const trashIcon = tag({tag: 'i', attrs: {class: 'fas fa-trash-alt'}})
('');

const tableRowTag = tag('tr');
const tableRow = items => tableRowTag(tableCells(items));
//const tableRow = items => compose(tableRowTag, tableCells)(items);



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
	renderItems();
	console.log(list);
}

const updateTotal = () => {
	let calories = 0, carbs = 0, protein = 0;
	list.map(item => {
		calories  += item.calories,
		carbs += item.carbs,
		protein += item.protein
	});

	document.getElementById('totalCalories').textContent = calories;
	document.getElementById('totalCarbs').textContent = carbs;
	document.getElementById('totalProtein').textContent = protein;
}

const cleanInputs = () => {
	description.value = '';
	calories.value = '';
	carbs.value = '';
	protein.value = '';
}

const removeItem = (index) => {
	list.splice(index, 1);
	updateTotal();
	renderItems();
}

const renderItems = () => {
	const elementList = document.querySelector('tbody');
	elementList.innerHTML = '';

	list.map((items, index) => {
		const removeButton = tag({
			tag: 'button',
			attrs: {
				class: 'btn btn-outline-danger',
				onclick: `removeItem(${index})`
			}
		})(trashIcon);

		elementList.innerHTML += tableRow([
			items.description,
			items.calories,
			items.carbs,
			items.protein,
			removeButton
		]);
	});
	console.log(elementList.innerHTML);
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
		updateTotal();
	}


}