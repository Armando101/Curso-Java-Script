import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// range(1, 5).pipe(map<number, number>(value => value * 10)).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupPluck$ = keyup$.pipe(pluck('key'));  // Devuelve el valor cuya clave es key en el objeto
const keyupMapTo$ = keyup$.pipe(mapTo('Tecla presionada')); // Devuelve la string siempre, transforma cualquier entrada en una salida especifica


// keyup$.subscribe(({code}) => console.log('map', code));

keyup$.pipe(map(event => event.code)).subscribe(console.log); // Devuelve el valor de la llave code

keyupPluck$.subscribe(console.log);
keyupMapTo$.subscribe(console.log);
