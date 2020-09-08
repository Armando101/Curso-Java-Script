import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

// sampleTime devuelve el ultimo valor emitido en el intervalo de tiempo especificado
click$
.pipe(
    sampleTime(2000),
    map(({x, y}) => ({x, y}))
)
.subscribe(console.log);