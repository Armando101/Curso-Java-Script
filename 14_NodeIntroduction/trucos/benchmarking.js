let suma = 0;

console.time('todo');

console.time('bucle');
for (let i = 0; i < 1000000000; i++) {
	suma += 1;
}
console.timeEnd('bucle');


console.time('bucle2');
for (let i = 0; i < 1000; i++) {
	suma += 1;
}
console.timeEnd('bucle2');

console.timeEnd('todo');

function asincrona() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Termina el proceso asincrono');
			resolve();
		});
	});
}

console.time('asincrono');
asincrona()
	.then(()=>{
		console.timeEnd('asincrono');
	});