import { of, from } from 'rxjs';

/*
 * of =Toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
*/

const observer = {
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
}

// const sources$ = from([1, 2, 3, 4, 5]);
// const sources$ = from('Armando');
// const sources$ = of('Armando');
// const sources$ = of(...[1, 2, 3, 4, 5]);

const sources$ = from(fetch('https://api.github.com/users/Armando101'));

// Nos subscribimos para obtener datos de una api
// sources$.subscribe(async (response) => {
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
// });

// Generadores con rxjs

const myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = myGenerator();

from( myIterable ).subscribe(observer);