const { Transform } = require('stream');

const transformaStram = new Transform({
	transform(chunk, encoding, callback) {
		this.push(
			chunk
			.toString()
			.toLowerCase()
			.split(' ')
			.map((item)=> {
				item[0]
				.toUpperCase()+item.slice(1)
			}).join('')
		);
		
		callback();
	}
});

process.stdin.pipe(transformaStram).pipe(process.stdout);