const promise = new Promise((resolve, reject) => {
	setTimeout(()=> {
		if (Math.random() < 0.5) {
			resolve('Hello World');
		} else {
			reject(new Error('Hello Error'));
		}
	}, 2000);
});


promise
	.then(msg => {
		console.log("message: ", msg.toUpperCase())
		return promise
	})
	.then(msg => console.log("message: ", msg.toUpperCase()))
	.catch(error => console.error("error: ", error));

