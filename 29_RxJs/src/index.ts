import { range, from } from 'rxjs';
import { filter } from 'rxjs/internal/operators/filter';

range(1, 10).pipe(
    filter((value, index) => {
        // console.log('index', index);
        return value % 2 === 0
    })
);//.subscribe(console.log);

interface character {
    tipo: string;
    nombre: string;
}

const personajes: character[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]

from(personajes).pipe(filter((item: character) => item.tipo === 'heroe') ).subscribe(console.log);