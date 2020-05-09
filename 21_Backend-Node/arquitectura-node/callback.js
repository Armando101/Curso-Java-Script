const asyncCallback = function (cb) {
	setTimeout(()=> {
		if (Math.random() < 0.5) {
			return cb(null, 'Hello World');
		} else {
			cb(new Error('Hello Error'), null);
		}
	}, 2000);	
};

asyncCallback((err, msg) => {
	if (err) return console.error('error: ', err);
	else {
		console.log('message: ', msg);
		asyncCallback((err, msg) => {
			if (err) return console.error('error: ', err);
			else {
				console.log('message: ', msg);
			}
		})
	}
});