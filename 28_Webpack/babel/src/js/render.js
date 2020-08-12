function render(data) {
	const pokemon = document.createElement('img');
	const header = document.createElement('h1');

	pokemon.setAttribute('src', data.sprites.front_default);
	header.innerHTML = data.name;

	document.body.append(header);
	document.body.append(pokemon);
}

export default render;