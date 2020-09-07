import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];

const totalAcc = (acc, cur) => acc + cur;

// Reduce
// Solo emite un solo valor cuando el observer es completado
from(numbers)
    .pipe(reduce(totalAcc, 0))
    .subscribe(console.log);

// Scan
// Emite un valor cada que llama la funcion dentro de scan
from(numbers)
    .pipe(scan(totalAcc, 0))
    .subscribe(console.log);

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: '000', autenticado: false, token: null},
    { id: '001', autenticado: true, token: 'AAA'},
    { id: '010', autenticado: true, token: 'AAB'},
];

const state$ = from(user).pipe(
        scan<Usuario>((acc, cur) => {
            return { ...acc, ...cur };
        }, { edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);