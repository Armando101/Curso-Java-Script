import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('nex: ', val),
    complete: () => console.log('Complete'),
}

const date = new Date(); // Fecha actual
date.setSeconds(date.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000); // Timer es similar a interval con la diferencia de que se completa

// Podemos colocar una fecha de ejecucion
const timer$ = timer(date);

// Por defecto es asincrono
console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');