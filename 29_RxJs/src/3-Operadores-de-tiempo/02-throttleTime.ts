import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent(document, 'click');

click$
.pipe(throttleTime(300))
.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

// asyncScheduler y el objeto de configuracion se pueden omitir
// Si colocamos leading en falso el comportamiento es similar a debounce time, hasta despues del timpo se emite el valor
// si colocmaos triling en true emite tambien el ultimo valor
input$
.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);