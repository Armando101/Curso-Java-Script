import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/internal/operators';

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

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),   // KeyboardEvent, string
    filter(key => key === 'Enter')
)

keyup$.subscribe(console.log);