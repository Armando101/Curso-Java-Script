import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const handleError = (response: AjaxError) => {
    console.warn('error: ', response.message);
    return of({
        ok: false,
        users: []
    });
}

const obs$ = ajax.getJSON(url).pipe(catchError(handleError));

// Si colocamos el objeto con el error y aparte una funcion para manejar el error solo toma uno
obs$
.pipe(catchError(handleError))
.subscribe({
    next: value => console.log('next:', value),
    error: error => console.warn('Error en subs: ', error),
    complete: () => console.log('Complete')
});