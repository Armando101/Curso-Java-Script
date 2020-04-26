const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


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