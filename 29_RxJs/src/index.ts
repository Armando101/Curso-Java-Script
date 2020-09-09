import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

// const handleError = (response: Response) => {
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response;
// }

const atrapaError = (err: AjaxError) => {
    console.warn('Error en: ', err.message);
    return of([]);
}

// const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(handleError)
//     .then(response => response.json())
//     .then(console.log)
//     .catch(console.log);

ajax(url)
    .pipe(
        pluck('response'),
        catchError(atrapaError)
    )
    .subscribe(console.log);