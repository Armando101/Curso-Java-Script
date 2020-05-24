// Transformación de textos
var text1 = "Hello Wolrd I'm Learning JS";

console.log(text1.toLowerCase());
console.log(text1.toUpperCase());

// Calcular la longitud
console.log(text1.length);

// Concatenar
var text2 = "I'll Learn Angular for develop Web Apps"

var totalText = text1 + ' ' + text2;
console.log(totalText);

var totalTextConcat = text1.concat(' ', text2);
console.log(totalTextConcat);

// Search functions
// Similar a indexOf
// Si no encuentra la cadena lanza un -1
var search = totalTextConcat.search('Learn');
console.log(search);

// indexOf show de index of the first occurrence
var index = text1.indexOf('Hello');
console.log(index);

// lastIndexOf show the last occurrence
var lastIndex = totalTextConcat.lastIndexOf('Learn');
console.log(lastIndex);

// match
// Return match information in array
// Can include an Regex
var match = totalTextConcat.match('Learn');
console.log(match);

// Returns an array matches
match = totalTextConcat.match(/Learn/g);
console.log(match);

// Substr
// Returns an substring
// Indicate the first and the last position
var substring = totalTextConcat.substr(5, 10);
console.log(substring);

// CharAt
// Returns an specified char
var char = totalTextConcat.charAt(23);
console.log(char);

// StartsWith
// Retruns boolean value if the string start with the string
var start = totalTextConcat.startsWith('Hello');
console.log(start);

// Includes
// Returns boolan value if the string contains the substring
var include = totalTextConcat.includes('Angular');
console.log(include);

// Replace
// Replaca a substring for another
var replace = totalTextConcat.replace('Angular', 'React')
console.log(replace);

// Slice
// Returns a substring start at the input value
var slice = totalTextConcat.slice(16, 21);
console.log(slice);

// Split
// Transform an string to array 
var split = totalTextConcat.split(' ');
console.log(split);

// Trim
// Quita los espacios que hay delante y detrás de la cadena
var trim = totalTextConcat.trim();
console.log(trim);