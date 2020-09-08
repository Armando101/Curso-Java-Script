import { of } from "rxjs";
import { take, tap } from "rxjs/internal/operators";

const numbers = of(1, 2, 3, 4, 5);

// Take nos permite tomar un cierto numero de emisiones
// Despues del numero de emisiones dado ya no recibe mas
// Esto quire decir que se desuscribe automaticamente
numbers
.pipe(take(3), tap(console.log))
.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
});