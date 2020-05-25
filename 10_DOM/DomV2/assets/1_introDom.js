// DOM

// Conseguir elementos con un ID concreto
var caja = document.getElementById('container');
console.log(caja);

// Get HTML
console.log(caja.innerHTML);

// Modifing HTML
caja.innerHTML = 'Hello wolrd from JS';

// Modifing CSS
caja.style.background = "cyan";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = 'Hello';

// Functions
function changeColor(color) {
	caja.style.background = color;
}

// Query selector es otra manera de obtener los elementos desde el DOM
caja = document.querySelector('#container');
console.log(caja);

// Conseguir elementos por su etiqueta
var divs = document.getElementsByTagName('div');
console.log(divs);

// Ahora puedo acceder a un elemento en concreto 
var contentText = divs[2].textContent;
console.log(contentText);


for(let valor in divs) {
	if (divs[valor].textContent) {
		var parrafo = document.createElement('p');
		var text = document.createTextNode(divs[valor].textContent);
		parrafo.appendChild(text);
		document.querySelector('#mySection').appendChild(parrafo);
	}
}

// Conseguir elementos por su clase
var divs1 = document.getElementsByClassName('container');
for(var item in divs1) {
	if (divs1[item].className) {
		divs1[item].style.background = '#ccc';
	}
}