// Para colocar una fecha colocamos

const date = new Date();
const year = date.getYear();
const fullYear = date.getFullYear();
const month = date.getMonth(); // month begining in zero
const day = date.getDate();
const hour = date.getHours();

const time = `
	The year is: ${year+1900}
	The full year is: ${fullYear}
	The month is: ${month}
	Day: ${day}
	Hour: ${hour}
`;

console.log(date);
console.log(time);