import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

// MergeMap mantien una subscripcio activa por cada click
// click$.pipe(
//     mergeMap(() => interval$)
// )
// .subscribe(console.log);

// SwitchMap solo mantien una subscripcion activa por cada click, cancela la anterior
click$.pipe(
    switchMap(() => interval$)
)
.subscribe(console.log);