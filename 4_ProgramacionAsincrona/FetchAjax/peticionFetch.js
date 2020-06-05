// Fetch (ajax) y peticiones a servicios / apis rest

const div_users = document.querySelector('#usuarios');
const ervinHowell = document.querySelector('#ErvinHowell');

function getUsuarios() {
	return fetch('https://jsonplaceholder.typicode.com/users')
}

function getErvinHowell() {
	return fetch('https://jsonplaceholder.typicode.com/users/2')
}

function userList(users) {
	users.map((user, index) => {
		let name = document.createElement('h3');
		name.innerHTML = index + ': ' + user.name + '. Username: ' + user.username;
		div_users.append(name);
	});
}

function getInfo() {
	const person = {
		name: 'Armando',
		lastname: 'Rivera',
		url: 'https://github.com/Armando101'
	}
	
	return new Promise((resolve, reject)=> {
		const person_string = JSON.stringify(person);
		if (typeof person_string != 'string') return reject(new Error('Error'));

		return resolve(person_string);
	});
}

getUsuarios()
 	.then(data => data.json())
	.then(data => {
		userList(data);

		return getErvinHowell();
	})
	.then(data => data.json())
	.then(data => {
		let ervin = document.createElement('h4');

		ervin.innerHTML = `Name: ${data.name}. Username: ${data.username}`;
		ervinHowell.append(ervin);
		return getInfo();
	})
	.then(data=> {
		console.log(data);
	})
	.catch(error => {
		console.log(error);
	});

