function operar(num1, num2, callback1) {
	console.log('Primera operación: ', num1 + num2);
	callback1(num1, num1, (num1, num2, callback2)=> {
		console.log('Segunda operacion', num1 - num2);
		callback2(num1, num2, (num1, num2, callback3)=> {
			console.log('Tercera operacion:', num1 * num2);
			callback3(num1, num2, (num1, num2)=> {
				console.log('Cuarta operacion: ', num1 / num2);
			});
		});
	});
}

operar(10, 10, (num1, num2, callback1)=> {
	console.log('Primer Callback');
	callback1(num1,num2, (num1, num2, callback2)=> {
		console.log('Segundo Callback');
		callback2(num1, num2, (num1, num2, callback3)=> {
			console.log('Tercer Callback');
			callback3(num1, num2);
		})
	});
});


const request = require('request');

console.log('\n\nPeticiones con callbackHell\n\n');

request('https://google.com', (req, res)=> {
	//console.log('Peticion a Google', res);
	console.log('Peticion a Google');
	request('https://facebook.com', ()=> {
		console.log('Peticion a Facebook');
		request('https://instagram.com', ()=> {
			console.log('Peticion a Instagram');
			request('https://github.com', ()=> {
				console.log('Peticion a GitHub');
			});
		});
	});
});

/**************** Para evitar el callback Hell usamos promesas ***********/

/*
const req = new request('https://facebook.com');
console.log(req);
*/