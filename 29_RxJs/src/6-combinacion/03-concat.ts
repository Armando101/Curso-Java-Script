import { interval, concat } from "rxjs";
import { take } from "rxjs/internal/operators";

const interval$ = interval(1000);

// Emite los valores y no emite los valores del siguiente observable si el anterior no se ha completado
concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    [1, 2, 3, 4]
).subscribe(console.log)