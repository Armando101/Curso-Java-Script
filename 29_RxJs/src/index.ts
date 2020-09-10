import { fromEvent } from "rxjs";
import { debounceTime, map, pluck } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// Este es un problema ya estamos teneiendo un doble subscribe lo cual hace el codigo menos limpio
input$.pipe(
    debounceTime(300),
    map(event => {
        const text = event.target['value'];
        return ajax.getJSON(
            `https://api.github.com/users/${ text }`
        );
    })
).subscribe(response => {
    response
        .pipe(pluck('url'))
        .subscribe(console.log);
});