'use strict'

const handlebars = require('handlebars');

// Este register helper nos ayudará a comunicarnos con el HTML
// Es como incluir una función en html
// Nos dirá el número de respuestas que tiene una pregunta
function registerHelpers() {
	handlebars.registerHelper('answerNumber', (answers) => {
  if (answers === undefined) return 0;
	  const keys = Object.keys(answers);
	  return keys.length;
	});
	
	handlebars.registerHelper('ifEquals', (a, b, options) => {
  if (a === b) return options.fn(this);
	  return options.inverse(this);
	});
	
	return handlebars;
}

module.exports = registerHelpers();