import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.error('error: ', error),
    complete: () => console.info('completed')
}

const intervalo$ = new Observable<number>(subscriber => {
    // Crear contador 1, 2, 3, 4, 5, 6
    let i = 0;
    const interval = setInterval(() => {
        // Cada segundo
        subscriber.next(++i);
        console.log(i);
    }, 1000);

    // Si no ponemos este return se siguen emitiendo valores aunque no los obtenga en mi subscripcion
    // Esto puede ocasionar un desborde de memoria
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const mySubscription = intervalo$.subscribe(num=>console.log('Num: ', num));

setTimeout(() => {
    // Cancelamos la subscripcion despues de 3 segundos
    mySubscription.unsubscribe();
    console.log('Completado timeout')
}, 3000);