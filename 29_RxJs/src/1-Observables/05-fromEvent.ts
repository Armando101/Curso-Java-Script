import { fromEvent } from 'rxjs';

/*
Eventos del DOM
*/

const scr1$ = fromEvent<PointerEvent>(document, 'click');
const scr2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (value) => console.log('next', value)
}

scr1$.subscribe(({x, y}) => {
    console.log(x, y);
});

scr2$.subscribe(event => {
    console.log(event.key);
});