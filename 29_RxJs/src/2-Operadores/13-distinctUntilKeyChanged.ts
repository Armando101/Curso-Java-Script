import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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


// distinctUntilKeyChanged compara por atributo de objeto
// Compara con el valor emitido inmediato anterior
from(characters)
    .pipe(distinctUntilKeyChanged('name'))
    .subscribe(console.log);
