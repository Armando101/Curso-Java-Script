import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/internal/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    takeWhile(({y})=> y<= 150, true) // True indica que vamos a emitir el ultimo valor
)
.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});