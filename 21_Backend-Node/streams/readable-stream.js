const { Readable } = require('stream');
const readableSream = new Readable();

readableSream.push(`${0/0} `.repeat(10).concat('Batman, Batman!!'));
readableSream.push(null);	// Indica que dejó de recibir datos

readableSream.pipe(process.stdout);
