import { interval, fromEvent } from "rxjs";
import { exhaustMap, take } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// Solo mantiene uns subscripcion activa
// Si llega otra subscripcion y la anterior no se ha completado no se subscribe
// Por mas clicks que de dentro del rango de tiempo (500ms) no se mandara la subscripcion
// Esto es util para evitar que el usuario de muchos clicks y aun el primero no ha respondido
click$
.pipe(
    exhaustMap(() => interval$)
)
.subscribe(console.log);