const form = document.querySelector('#form');
const ul = document.querySelector('#movies-list');
const formDelete = document.querySelector('#remove');
const removeMovie = document.querySelector('#removeMovie');

form.addEventListener('submit', ()=> {
	const title = document.querySelector('#addMovie').value;
	if (title.length >= 3) {
		localStorage.setItem(`${title}`, title);
	}
});

formDelete.addEventListener('submit', (event)=> {
	for (let index in localStorage) {
		if (removeMovie.value == index) {
			localStorage.removeItem(index);
		}
	}

	// event.preventDefault();
});

for(let index in localStorage) {
	if (typeof(localStorage[index]) == "string") {
		const li = document.createElement('li');
		li.append(localStorage[index]);
		ul.append(li);
	}
}
// localStorage.clear();
console.log('Final del script');