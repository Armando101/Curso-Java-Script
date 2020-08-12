import '../css/index.css';
import search from './search';
import render from './render';

const id = prompt('Quien es el pokemon');

search(id)
	.then((data) => {
		render(data);
	})
	.catch((err) => {
		console.log('No hubo pokemon');
	})