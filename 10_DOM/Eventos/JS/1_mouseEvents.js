// Mouse events

window.addEventListener('load', ()=> {
	// Se ejecuta cuando la pagina termina de ser cargada
	console.log('Pagina cargada');
});

const boton = document.querySelector('#button');

function changeColor() {
	let bg = boton.style.backgroundColor;
	if (bg == 'green') {
		boton.style.background="red";
	} else {
		boton.style.background="green";
	}
	boton.style.padding="10px";
	boton.style.border="1px solid #ccc";
}

// Click
boton.addEventListener('click', ()=> {
	changeColor();
});

// Mouse over
boton.addEventListener('mouseover', ()=> {
	boton.style.background="#ccc";
});

// Mouse out
boton.addEventListener('mouseout', ()=> {
	boton.style.background="black";
});

// Foucs
const input = document.querySelector('#campo_nombre');
input.addEventListener('focus', ()=> {
	console.log('[focus] Estas dentro del input');
});

// Blir
input.addEventListener('blur', ()=> {
	console.log('[blur] Estas dentro fuera input');
});

// Keydown
input.addEventListener('keydown', (event)=> {
	console.log('[keydown] Tecla pulsada', event.key);
});

// Keypress
input.addEventListener('keypress', (event)=> {
	console.log('[keypress] Tecla presionada', event.key);
});

// Keyup
input.addEventListener('keyup', (event)=> {
	console.log('[keyup] Tecla soltada', event.key);
});
