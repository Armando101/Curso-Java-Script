import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/internal/operators";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalReduce = ((acumulado: number, actual: number): number => acumulado + actual);

// const total = numbers.reduce(totalReduce, 0);
// console.log(total);

interval(1000)
    .pipe(
        take(3),
        // tap(console.log),
        reduce(totalReduce, 0)
    )
    .subscribe({
        next: value => console.log('next: ', value),
        complete: () => console.log('Completed')
    });