import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$
.pipe(debounceTime(300))
.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
.pipe(
    debounceTime(300),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);