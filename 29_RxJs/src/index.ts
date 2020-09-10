import { fromEvent, of } from "rxjs";
import { tap, map, pluck, catchError, exhaustMap } from "rxjs/internal/operators";
import { ajax } from "rxjs/ajax";

// Helper
const fetchHttpLogin = ( userPass ) =>
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        pluck('response', 'token'), // Tomamos el token que devuelve la peticion
        catchError( _ => of('Whoops something went wrong'))  // Si hay un error lo controlamos
    );

// Creando formulario
const form  = document.createElement('form');
const inputEmail  = document.createElement('input');
const inputPass  = document.createElement('input');
const submitBtn  = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap(event => event.preventDefault()),   // Prevenimos que recargue la pagina
        map(event => ({                         // Tomamos el email y passwors y lo regresamos
            email: event.target[0].value,
            password: event.target[1].value
        })),
        exhaustMap(fetchHttpLogin)              // Pasamos email y password a la funcion
    );

submitForm$.subscribe(console.log);
