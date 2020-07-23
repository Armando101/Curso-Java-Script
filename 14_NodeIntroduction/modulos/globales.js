console.log(global);

let i = 0;
let interval = setInterval(function() {
	console.log('Hola')
	if (i === 3) {
		clearInterval(interval);
	}
	i++;
}, 1000);

setImmediate(function() {
	console.log('goodbye');
});

console.log(process);
console.log(__dirname);

global.miVariable = 'Some global variable';
console.log(miVariable);