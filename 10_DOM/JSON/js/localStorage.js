// Localstorage
// Localstorage utility is for save information in our browser

if (typeof(Storage)) {
	console.log(Storage);
	console.log('Local storage available')
} else {
	console.log('Local storage unavailable')
}

// Save data at localstorage
localStorage.setItem('Title', 'JS Vanilla');

// Get data from localStorage
const data = localStorage.getItem('Title');

document.querySelector('#movies').innerHTML = data;

// Save objects at localStorage
const user = {
	name: 'Armando Rivera',
	email: 'armando@rivera.com',
	web: "https://github.com/Armando101"
};

localStorage.setItem('user', JSON.stringify(user));

// Recuperar objeto
const getUser = JSON.parse(localStorage.getItem('user'));
console.log(getUser.web);
document.querySelector('#data').append(' ' + getUser.web+ '-' + getUser.name);

// Delete localStorage
localStorage.removeItem('user');
localStorage.clear(); // Delete all