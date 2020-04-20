let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    
    // Indico que voy a utilizar el método GET
    // Indico la url de la cuál haré la petición
    // El true indica que se hará de manera asíncrona
    xhttp.open('GET', url_api, true);
    
    // Escucho la conexión que acabo de abrir con open
    // La función se ejecuta cuando hay un cambio de estado
    // Existen 5 estados
    xhttp.onreadystatechange = function (event) {
        // Valido si el estado en el que me encuetro es satisfactorio
        // readySatate puede tener 5 estados [0-4]
        // El valor 4 indica que se completó la petición
        if (xhttp.readyState === 4) {
            // El estatus code 200 indica que la petición fue exitosa
            if (xhttp.status === 200) {
                // null: indica que no hay error
                // JSON.parse: convierte el texto plano en JSON
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // En caso de que haya un error lo mando como argumento
                // null: indica que no hay respuesta
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }        
    }
    // Mando la respuesta final
    xhttp.send();
}

fetchData(API, function(error1, data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2, data2) {
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})