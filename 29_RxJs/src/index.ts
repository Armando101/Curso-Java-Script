import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.post(url, {
//     id: 1,
//     nombre: 'Armando'
// }, {
//     'my-token': '123456789'
// }).subscribe(console.log);

ajax({
    url,
    method: 'POST',
    headers: {
        'my-token': '123456789'
    },
    body: {
        id: 1,
        name: 'Armando'
    }
}).subscribe(console.log);