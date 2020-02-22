// await hace que la ejecución del código espere a que una promesa sea resuelta
// Esto es útil ya que evita que uses then y funciones anónimas constantemente

let promesa = new Promise((resolve, reject)=>{
	setTimeout(resolve, 400, 5);
});

// Para ver el valor que regresa la promesa tenemos que usar then
promesa.then(console.log);

// Otra manera es crear una función anónima
promesa.then((resultado) => {
	console.log(resultado);
});

// Esto lo podemos evitar usando la palabra reservada await
// Para usar await es necesario usarlo dentro de una función asíncrona

// Como podemos ver tratamos a la promesa como cualquier otro valor
// De esta manera pareciera que estamos trabajando con valores síncronos pero no es el caso
(async function() {

	let promesa2 = await new Promise((resolve, reject)=>{
		setTimeout(resolve, 400, 5);
	});
	
	let valor1 = await new Promise((resolve, reject)=>{
		setTimeout(resolve, 400, 5);
	});
	
	let valor2 = await new Promise((resolve, reject)=>{
		setTimeout(resolve, 400, 10);
	});
	
	console.log(promesa2);

	// También podemos hacer operaciones con los valores devueltos
	console.log(valor1 + valor2);
})();

// Veamos otro ejemplo
// Declaramos una función asíncrona
async function show_GitHub_info() {
	// Hacemos una petición al api de GitHub
	let response = await fetch('https://api.github.com/users/Armando101/repos');

	// Leemos la respuesta en formato JSON
	let repositorios = await response.json();
	console.log(repositorios);
}

show_GitHub_info();