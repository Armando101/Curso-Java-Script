import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.error('error: ', error),
    complete: () => console.info('completed')
}

const intervalo$ = new Observable<number>(subscriber => {

    setInterval(() => subscriber.next(Math.random()), 2000);

});

/*
    Caracteristicas principales del subject
 1- Casteo multiple: podemos tener varias subscripciones y todos recibiran lo mismo
 2- Tambien es un observer
 3- Manejo Next, error y complete
*/

const subject$ = new Subject();
intervalo$.subscribe(subject$);

// Vemos que sub1 y sub2 nos arrojan resultados distintos
// const subs1 = intervalo$.subscribe(console.log);
// const subs2 = intervalo$.subscribe(console.log);

// Vemos que sub3 y sub4 nos arrojan resultados iguales
const subs3 = subject$.subscribe(console.log);
const subs4 = subject$.subscribe(console.log);