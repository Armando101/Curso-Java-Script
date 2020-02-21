function calcular() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 400, 5);
	});
}

function segundo_calculo(numero) {
	console.log(numero);
	return new Promise((resolve, reject) => {
			setTimeout(resolve, 200, 'Segunda promesa');
		});	
}

calcular().then(segundo_calculo).then(console.log);