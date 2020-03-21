// Obtenemos un elemento por el ID
const title = document.getElementById('title');

// Podemos ver que se trata de un objeto
console.log(title);

// Este atributo es el texto que contiene
console.log(title.textContent);

// De esta manera cambio el valor del text
title.innerHTML = "Cursos";

console.log(title.textContent);

var description = document.getElementById('description');
description.innerHTML = 'Listado de Cursos';

// Todos los objetos tienen el atributo className
// title.className
// Con este atributo vamos a realizar la siguiente búsqueda

const items = document.getElementsByClassName('list-group-item');

for (var i = 0 ; i < items.length; i++) {
	console.log(items[i]);
}

/********* Obtener elementos por etiqueta *********/
// Todos los objetos poseen el atributo tagName
// title.tagName

const itemsTag = document.getElementsByTagName('li')
for (var i = 0 ; i < items.length; i++) {
	// Podemos poner estilos desde JS con el atributo style
	if (i % 2 == 0) {
		let element = itemsTag[i];
		element.style.background = '#f2f2f2';
	}
	console.log(itemsTag[i].innerHTML);
}

/******** Obtener elementos por id **********/
var element = document.querySelector('#first-course');
console.log(element);

/******** Obtener elementos por clase **********/
// querySelector regresa el primer elemento
var element = document.querySelector('.list-group-item');
console.log(element);

/******** Obtener elementos por etiqueta **********/
var element = document.querySelector('li');
console.log(element);


// Podemos usar reglas más complejas
// Indico que quiero el primer elemento li que se encuentre dentro de una etiqueta ul con clase list-group que a su vez esté dentro de un div cuya clase sea row
var element = document.querySelector('div.row > ul.list-group > li ');
console.log(element);


// querySelector retorna un listado de elementos
const itemsQSA = document.querySelectorAll('li');
console.log(itemsQSA);

// Sentencia que me permite obtener todos los elementos li pares
const itemsQSAOdd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0 ; i < itemsQSAOdd.length; i++) {
	// Podemos poner estilos desde JS con el atributo style
	let element = itemsQSAOdd[i];
	element.style.background = '#f2f2f2';
}

/****************** Elementos hijos *****************/
const list = document.querySelector('ul');

// Número de hijos
console.log(list.childElementCount);

// Listado de hijos
console.log(list.children);

// Al ser un listado puedo iterar sobre él
for (var i = 0; i<list.children.length; i++) {
	console.log(list.children[i]);
}

// Obtener primer y último elemento
console.log(list.firstElementChild);
console.log(list.lastElementChild);

/************** Elementos hermanos **************/
// Si quiero acceder a un elemento padre lo hago con parentElement
console.log(element.parentElement);

// Elemento abuelo
console.log(element.parentElement.parentElement);

// Hermanos
// Primer hermano
console.log(element.nextElementSibling);

// Seguno hermano
console.log(element.nextElementSibling.nextElementSibling);

// Si el elemento no tiene hermanos retorna null

// También podemos retroceder hermanos
console.log(element.nextElementSibling.previousElementSibling);
console.log(list.lastElementChild.previousElementSibling);

/************** Nodos ***********/
console.clear();
var element = document.getElementById('first-course');
// element no tiene hijos pero sí nodos
console.log(element.childElementCount)
console.log(element.childNodes.length)
console.log(element.childNodes)

/********************* Atributos ************/

/******** innerHTML y textContent************/
// textContent sólo contiene el texto sin código HTML
description.textContent = 'Listado de cursos'

// innerHTML conserva el HTML
// Si tenemos etiquetas o saltos de línea los conserva
description.innerHTML = '<strong>'+ description.textContent +'</strong>';

/********************** Documentación *********************/
// https://developer.mozilla.org/es/




/********************* Eventos ********************/
// Evento click

// Obtenemos el elemento
const button = document.querySelector('.btn.btn-primary');

// Agregamos un evento mediante addEventListener
// El primer argumento es el tipo de evento
// El Segundo es una función

// Eventos:
	// click
	// dblclick

// El atributo target hace referencia al objeto que lanzó el evento
// event hace referencia al evento en sí
button.addEventListener('click', (event)=> {
	
	if (title.style.display != 'none') {
		description.style.display = 'none';
		title.style.display = 'none';
		// button.textContent = 'Mostrar'
		// this.textContent = 'Mostrar'
		event.target.textContent = 'Mostrar'

	} else {
		description.style.display = 'block';
		title.style.display = 'block';
		//event.textContent = 'Ocultar'
		// this.textContent = 'Ocultar'
		event.target.textContent = 'Ocultar'
	}

});

// Eventos del mouse
	// mouseenter

// className modifica la clase
button.addEventListener('mouseenter', (event)=>{
	event.target.className = 'btn btn-danger';
});

button.addEventListener('mouseout', (event)=>{
	event.target.className = 'btn btn-primary';
});

// setTimeout recibe dos argumentos
// El primer argumento es una función
// El segundo argumento es un número entero que representa en ms
setTimeout(()=>{
	console.log('Hola Mundo!!!');
}, 3000);

// Eventos del teclado

const input = document.getElementById('input');

input.addEventListener('keydown', (event)=>{

	console.log('Tecla presionada '+ event.key + ' con un código ' + event.keyCode);
	
	// console.log('Tecla presionada');
});