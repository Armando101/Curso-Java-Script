import { fromEvent, merge } from "rxjs";
import { pluck } from "rxjs/operators";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

// Emite los valores de acuerdo a como se emitan los observadores
// El merge no se completa hasta que no se hayan completado todos los observadores
merge(
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
)
.subscribe(console.log);