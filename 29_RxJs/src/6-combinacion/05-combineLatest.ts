import { fromEvent, combineLatest } from "rxjs";
import { pluck } from "rxjs/operators";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

// Regresa un arreglo que combina el ultimo dato emitido por cada uno de los observers
// Se completa hasta que todos los observers se completen
combineLatest(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
)
// .subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper
const getInputStream = (element: HTMLElement) =>
    fromEvent<KeyboardEvent>(element, 'keyup').pipe(
        pluck<KeyboardEvent, string>('target', 'value')
    );

combineLatest(
    getInputStream(input1),
    getInputStream(input2),
).subscribe(console.log);