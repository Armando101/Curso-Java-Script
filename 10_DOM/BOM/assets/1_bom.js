// El BOM es el Browser Object Model
// Nos permite trabajar con los elementos que nos da el navegador
// Como ver el tamaño del navegador
// Redirigir una URL a otra

// Ver el tamaño de la ventana

function getWidthHeight() {
	console.log(window.innerHeight);
	console.log(window.innerWidth);
}

function getScreen() {
	console.log(screen.height);
	console.log(screen.width);	
}

function url() {
	// Devuelve información de la dirección donde corre la página
	console.log(window.location);	
}

function redirect(url) {
	// Me redirige a una página
	window.location.href = url;
}

function openWindow(url) {
	window.open(url, "", "width=400", "height=300");
}

getWidthHeight();
getScreen();
url();
// redirect('https://google.com')
openWindow('https://google.com');