const { Transform } = require('stream');

const transformaStram = new Transform({
	transform(chunk, encoding, callback) {
		this.push(chunk.toString().toUpperCase());
		callback();
	}
});

process.stdin.pipe(transformaStram).pipe(process.stdout);