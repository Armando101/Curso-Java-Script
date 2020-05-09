const promiseFunction = ()=> new Promise((resolve, reject) => {
	setTimeout(()=> {
		if (Math.random() < 0.5) {
			resolve('Hello World');
		} else {
			reject(new Error('Hello Error'));
		}
	}, 1000);
});

async function asyncAwait() {
	try {
		const msg = await promiseFunction();
		console.log('message: ', msg)
		const msg2 = await promiseFunction();
		console.log('message: ', msg2)
	} catch(error) {
		console.error('error', error);
	}
}

asyncAwait();