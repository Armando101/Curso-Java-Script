import { of, interval, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";

// Solo regresa un valor cuando todos los observables se completan
// Regresa un arreglo con el ultimo elemento de cada observer
const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin(
//     numbers$,
//     interval$,
//     letters$
// ).subscribe(response => {
//     console.log('Numeros: ', response[0]);
//     console.log('Intervalo: ', response[0]);
//     console.log('Letras: ', response[0]);
// });

// Mismo ejercicio usando Objetos
// forkJoin({
//     numbers$,
//     interval$,
//     letters$
// }).subscribe(console.log);


// Otro caso con Objetos
forkJoin({
    num: numbers$,
    interval: interval$,
    letras: letters$
}).subscribe(console.log);
