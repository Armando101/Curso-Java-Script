import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numbers$ = of<number | string>(1, '1', 1, 3, 3, 4, 5, 6, 7, 1, 2, 3, 0);

// Solo emite valores diferentes
// Cabe destacar que para comparar los valores hace un ===
numbers$.pipe(distinct())
.subscribe(console.log);

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

// De esta manera devuelve lo mismo ya que al hacer === tambien hace comparacion de refrencias
// from(characters).pipe(distinct()).subscribe(console.log);

// Podemos hacer un distinct de una propiedad como nombre
// De esta manera solucionamos el error
from(characters)
    .pipe(distinct(character => character.name))
    .subscribe(console.log);