import { interval, fromEvent } from "rxjs";
import { sample } from "rxjs/operators";

const interval$ = interval(300);
const click$ = fromEvent(document, 'click');

// sample: obtengo el valor emitido justo antes de que se haya emitido un evento en el observer que se le pasa como argumento a sample

interval$
.pipe(
    sample(click$)
)
.subscribe(console.log);