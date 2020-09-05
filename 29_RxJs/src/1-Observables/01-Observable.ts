import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.error('Error [obs]: ', error),
    complete: () => console.info('Completed')
}

// const obs$ = Observable.create();
const obs$ = new Observable<string>((subscriber) => {
    subscriber.next('Hello');
    subscriber.next('World');

    // const a = undefined;
    // a.name = 'Armando';

    subscriber.complete();

    subscriber.next('Hola');
    subscriber.next('Mundo');
});

// Esta es una manera de subscribirnos
// obs$.subscribe(
//     value => console.log('next:', value),
//     error => console.warn('error', error),
//     () => console.info('Completed')
// );

// Esta es otra manera distinta de subsribirnos
obs$.subscribe(observer);