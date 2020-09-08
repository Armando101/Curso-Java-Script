import { fromEvent } from "rxjs";
import { auditTime } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

// auditTime: devuelve el ultimo valor emitido despues del tiempo indicado
// El tiempo empieza a contar desde que se dipara el primer evento
click$
.pipe(
    auditTime(2000)
)
.subscribe(console.log);