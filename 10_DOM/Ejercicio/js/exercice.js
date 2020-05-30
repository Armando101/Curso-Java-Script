const form = document.querySelector('#form');
const boxDashed = document.querySelector('.dashed');

boxDashed.style.display = "none";

window.addEventListener('load', ()=> {
	console.log('DOM cargado');
});

form.addEventListener('submit', (event)=> {
	console.log('Evento sumbit ejecutado');
	
	const name = document.querySelector('#name');
	const lastname = document.querySelector('#lastname');
	const age = document.querySelector('#age');


	const userData = [name, lastname, age];

	const abort = userData.map((index) => {
		if (index.value.trim() == null || index.value.trim().length==0) {
			alert(`Invalid ${index.name}`);
			return true;
		}
		return false;
	});

	if(abort.includes(true)) return;

	console.log(`My name is ${name.value} ${lastname.value} and I'm ${age.value} years old`);

	boxDashed.style.display = "block";

	/*
		for(index in userData) {
			const pargraph = document.createElement('p');
			pargraph.append(userData[index]);
			boxDashed.append(pargraph);	
		}
	*/

	userData.map( index => {
		const pargraph = document.createElement('p');
		pargraph.append(`${index.name}: ${index.value}`);
		boxDashed.append(pargraph);
	});
	event.preventDefault();
});