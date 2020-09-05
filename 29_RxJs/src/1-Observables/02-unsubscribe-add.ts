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

    // Si lo completo se manda a llamar la funcion del return como si me hubiera desuscribido
    setTimeout(()=> {
        subscriber.complete();
    }, 3000);

    // Si no ponemos este return se siguen emitiendo valores aunque no los obtenga en mi subscripcion
    // Esto puede ocasionar un desborde de memoria
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe(num=>console.log('Num: ', num));
const subs2 = intervalo$.subscribe(num=>console.log('Num: ', num));
const subs3 = intervalo$.subscribe(num=>console.log('Num: ', num));

// Para evitar desuscribirnos manualamente a cada uno de los subscribers que tengo
// Encadeno las subscripciones y despues solo me desuscribo de una

subs1.add(subs2)
    .add(subs3);

setTimeout(() => {
    // Cancelamos la subscripcion despues de 6 segundos
    // Si antes del ubsubscribe ya complete la subscripcion ya no tiene efecto este unsubscribe
    subs1.unsubscribe();
    console.log('Completado timeout')
}, 6000);