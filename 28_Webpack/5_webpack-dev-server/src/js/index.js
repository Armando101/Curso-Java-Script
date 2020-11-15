import '../css/index.css';
import text from './text';

text();

if (module.hot) {   // Si tenemos activo el hot module
    module.hot.accept('./text', function() {    // Haz hot reaload cuando haya cambios en este archivo
        text();
        console.log('He recargado en caliente');
    });
}