import { range } from 'rxjs';
import { tap, map } from 'rxjs/internal/operators';

const numbers$ = range(1, 5);

// Tap nos permite interceptar valores para ver que contiene
numbers$.pipe(
    tap(x => console.log('antes', x)),
    map(value => value*10),
    tap({
        next: value => console.log('despues', value),
        complete: () => console.log('Se termino')
    })
).subscribe(value => console.log('sub', value));