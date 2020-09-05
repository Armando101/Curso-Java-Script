import { range, asyncScheduler } from 'rxjs';

// Emite 100 valores empezando en 1
// const src$ = range(1, 100);

// Emite 10 valores empezando en -5
// const src$ = range(-5, 10);

// Emite 5 valores empezando en 1
// asyncScheduler indica que sera de manera asincrona
const src$ = range(1, 5, asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Final');