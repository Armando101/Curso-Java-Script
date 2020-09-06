import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1, 5).pipe(map<number, number>(value => value * 10)).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// keyup$.subscribe(({code}) => console.log('map', code));

keyup$.pipe(map(event => event.code)).subscribe(console.log);