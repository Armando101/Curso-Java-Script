import { fromEvent } from "rxjs";
import { take, first, map } from "rxjs/internal/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

// First toma solo el primer evento emitido
click$
.pipe(
    // take(1) // Con take solo toma un click, manda el complete y lod demas clicks ya no los toma
    // first() // Toma solo el primer evento
    first(event => event.clientY >= 150) // Toma solo el primer evento cuya coordenada Y sea mayor a 150
)
.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});

click$.pipe(map(({ clientX, clientY}) => ({clientY, clientX})))
.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});