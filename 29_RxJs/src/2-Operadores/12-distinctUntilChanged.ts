import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numbers$ = of<number | string>(1, '1', 1, 3, 3, 4, 5, 6, 7, 1, 2, 2, 3, 0);

interface Charcter {
    name: string;
};

const characters: Charcter[] =[
    { name: 'Wonderwoman'},
    { name: 'Spiderman'},
    { name: 'Wonderwoman'},
    { name: 'Superman'},
    { name: 'Wonderwoman'},
    { name: 'Batman'},
    { name: 'Batman'},
    { name: 'Batman'},
    { name: 'Wonderwoman'},
    { name: 'Spiderman'},
]

// UntilChanged solo compara con el valor emitido inmediatamente antes
numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

// Para objetos declaramos una funcion que reciba el valor inmediat anterior y el actual
// Ahora comparamos sus atributos
from(characters)
    .pipe(distinctUntilChanged((before, currently) => before.name === currently.name))
    .subscribe(console.log);
