import { interval, fromEvent } from "rxjs";
import { takeUntil, skip } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, 'click');
const clickBtn$ = fromEvent(button, 'click').pipe(skip(1)); // Emite un valor hasta que se haya pulsado dos veces ya que la primera vez la salta

// Takeuntil me permite desubscribirme cuando otro observador haya emitido un evento
counter$
.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: (value) => console.log('next', value),
    complete: () => console.log('complete')
});