const messages = [
	"Armando",
	"Ana",
	"Rodrigo",
	"Jenny",
	"Laura",
	"Gabriel"
];

const randomMsg = () => {
	const message = messages[Math.floor(Math.random()*messages.length)];

	console.log(message);

	return message;
}

module.exports = { randomMsg };