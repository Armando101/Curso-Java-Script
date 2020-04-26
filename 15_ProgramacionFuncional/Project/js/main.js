const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


const $description = document.getElementById('description');
const $calories = document.getElementById('calories');
const $carbs = document.getElementById('carbs');
const $protein = document.getElementById('protein');
