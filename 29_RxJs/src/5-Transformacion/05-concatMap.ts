import { interval, fromEvent } from "rxjs";
import { concatMap, take } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// Cuando clicks consecutivos el ultimo se va a la cola y se ejecuta hasta despues que se hayan completado los anteriores
// A diferencia del switchMap que lo que hace es cancelar todos los anteriores y solo deja el ultimo
click$
.pipe(
    concatMap(() => interval$)
)
.subscribe(console.log);