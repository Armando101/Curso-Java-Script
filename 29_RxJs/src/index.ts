import { of } from 'rxjs';

const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of(...[1, 2, 3, 4, 5, 6]);
// const obs$ = of([1, 2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Inicio del Obs$');
obs$.subscribe( item => console.log('Next: ', item), null, () => console.log('Terminamos la secuencia'));
console.log('Fin del Obs$');