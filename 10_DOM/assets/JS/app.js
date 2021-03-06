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


// Evento submit
const form = document.getElementById('course-form');
form.addEventListener('submit', (event)=> {

	// Método que previene el comportamiento por default
	// Esto evita que el formulario recargue la página
	event.preventDefault();

	let title = document.getElementById('input').value;
	let description = document.getElementById('description-form').value;

	console.log(title);
	console.log(description);

	create_card(title, description);

});

const checkbox = document.getElementById('checkbox');
let title_form = document.getElementById('input');
checkbox.addEventListener('change', ()=> {
	console.log('Cambio de valor');
});


// documentLoaded
// Este evento es lanzadocuando en DOM ya fue construido
//Aquí podemos inlcuir todo el código, esto es útil si es necesario que nuestro JS esté en el head del HTML
document.addEventListener('DOMContentLoaded', ()=>{
	console.log('HTML y CSS cargado');
});


// Propagación de eventos
// Si doy click en un evento también le estoy dando click a la lista, al div_row, al div_container y al body.
const element_event = document.querySelector('li');
const list_event = document.querySelector('ul');
const div_row = document.querySelector('.row');
const div_container = document.querySelector('.container');
const body = document.querySelector('body');

element_event.addEventListener('click',show_messages);
list_event.addEventListener('click',show_messages);
div_row.addEventListener('click',show_messages);
div_container.addEventListener('click',show_messages);
body.addEventListener('click',show_messages);

function show_messages(event) {
	// this.tagName se va propagando
	// event.target.tagName hace referencia al objeto que disparó el evento
	console.log("Elemento actual " + this.tagName);
	console.log("Elemento que disparó el evento: " + event.target.tagName);
	console.log();

	// Detener propagación
	event.stopPropagation();
}

const row = document.querySelector('.row');

/****************** Modificar el DOM***********************/

// Agregar elementos al DOM
function create_card_by_innerHTML(title, description) {
	let html = `
		<div class="col-sm-6 col-md-4">
  				<div class="thumbnail">
  					<div class="caption">
  						<h3> ${title} </h3>
  						<p> ${description}</p>
  						<p><a href="#" class="btn btn-primary">Acción</a></p>
  					</div>
  				</div>
  			</div>
	`;

	row.innerHTML += html;
}

function create_card(title, description) {
	// Creo los elementos necesarios para hacer una card
	let div = document.createElement('div');
	div.className = 'col-sm-6 col-md-4';

	let thumbnail = document.createElement('div');
	thumbnail.className = 'thumbnail';

	let caption = document.createElement('div');
	caption.className = 'caption';
	
	let h3 = document.createElement('h3');
	h3.textContent = title;

	let p1 = document.createElement('p');
	p1.textContent = description;

	let p2 = document.createElement('p');
	let a = document.createElement('a');

	a.className = 'btn btn-primary';
	a.textContent = 'Eliminar';

	// Agregamos los elementos hijos a los padres
	// Empezamos de manera ascendente

	p2.appendChild(a);

	caption.appendChild(h3);
	caption.appendChild(p1);
	caption.appendChild(p2);

	thumbnail.appendChild(caption);

	div.appendChild(thumbnail);

	row.appendChild(div);

	// Agregamos un evento para eliminar la card
	p2.addEventListener('click', delete_card);
}

// Eliminar elementos

function delete_card(event) {
	// Para eliminar un elemento necesitamos:
	// Elemento padre
	// Elemento hijo a eliminar
	console.log('Carta a eliminar');
	
	let ancestro = get_ancestro(event.target, 4);
	row.removeChild(ancestro);
}

function get_ancestro(ancestro, level) {
	if (!level)
		return ancestro;

	level--;

	return get_ancestro(ancestro.parentElement, level);
}