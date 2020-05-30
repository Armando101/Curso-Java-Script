
// JSON // JavaScript Object Notation

const movie = {
	title: 'Psicosis',
	year: 1998,
	country: 'United States'
};

console.log(movie);
console.log(movie.title);
console.log(movie.year);
console.log(movie.country);

const movies = [
	{title: 'Requiem for a dream', year: 1998, country: 'USD'},
	movie
];

const box = document.querySelector('#movies');

for (index in movies) {
	const p = document.createElement('p');
	p.append(movies[index].title);
	box.append(p);
}