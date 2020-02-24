// Para ejecutar este código es necesario hacer uso de un servidor

function GET(url) {
	return new Promise(function(resolve, reject) {
		// Creamos un objeto XMLHttpRequest
		// Este objeto nos permite hacer la petición
		let ajax_call=new XMLHttpRequest();

		// Con el método open hacemos la petición, pasamos GET
		ajax_call.open('GET', url);

		// onload nos permite saber si la petición ya dio una respuesta
		// Se ejecuta cuando terminó la petición
		// ajax_call.response regresa la respuesta de la petición
		ajax_call.onload = function() {
			if (ajax_call.status == 200) return resolve(ajax_call.response);
			reject(Error(ajax_call.status));
		};
		// onerror nos permite saber si hubo un error
		ajax_call.onerror = function (err) {
			reject(err);
		}

		// Mandamos la petición
		ajax_call.send();
	});
}

function get_user_info(username) {
	return GET('https://api.github.com/users/'+username);
}

function get_repos_username(username) {
	return GET('https://api.github.com/users/'+username+'/repos');
}

function get_repos(url_repos) {
	return GET(url_repos);
}

get_user_info('Armando101').then(console.log).catch(console.log);

// Podemos anidar promesas de la siguiente manera
get_user_info('Armando101').then(response => {

	// Convertimos la cadena a formato JSON
	let responseJSON = JSON.parse(response);

	// Buscamos la propiedad repos_url, esta nos regresa la url de los repositorios
	console.log(responseJSON.repos_url);

	// Llamamos a la función get_repos
	get_repos(responseJSON.repos_url).then(console.log);

	// Si yo quisiera seguir andidando haría lo siguiente
/*
	get_repos(responseJSON.repos_url).then(repos => {
		// Código de la siguiente promesa
	});
*/
	// Hacer lo anterior no es muy recomendable ya que el código se vuelve cada vez menos legible
}).catch(console.log);


// La siguiente forma de anidar las promesas es más legible
let get_user_promise = get_user_info();

// Anido una promesa teniendo la variable anterios
let get_repos_promise = get_user_info().then(response => {
	return get_repos(JSON.parse(response).repos_url);
}).catch(console.log);

// Si quiero seguir anidando podría hacer los siguiente
// let get_idividual_repos_promise = get_repos_promise.then().catch();
// De esta manera es mucho más legible el código
