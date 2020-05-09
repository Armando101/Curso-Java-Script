const { Readable } = require('stream');
const readableSream = new Readable({
	read(size) {
		setTimeout(()=> {
			if (this.currenCharCode > 90) {
				this.push(null);
				return;
			}

			this.push(String.fromCharCode(this.currenCharCode++));
		}, 1000)
	}
});

readableSream.currenCharCode = 65;
readableSream.pipe(process.stdout);
