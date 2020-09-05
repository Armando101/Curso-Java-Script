import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hello World');
const saludar2 = (nombre: string) => console.log(`Hello World ${nombre}`);
const saludar3 = state => console.log(`Hello World ${state.nombre} ${state.apellido}`);

// schedule: recibe como primer argumento una funcion y como segundo el tiempo dentro del cual se va a ejecutar
// asyncScheduler.schedule(saludar2, 1000, 'Armando');

// Como tercer parametro recibe el estado
// asyncScheduler.schedule(saludar3, 1000, {nombre: 'Armando', apellido: 'Rivera'});

/********** Caso practico ************/
// Hagamos un setInterval

const subs = asyncScheduler.schedule(function(state) {
    console.log('state', state);
    this.schedule( state + 1, 1000 );
}, 3000, 0);

// Desubscripcion con setTimeOut
// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

// Desubscripcion con asyncSchedule
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);