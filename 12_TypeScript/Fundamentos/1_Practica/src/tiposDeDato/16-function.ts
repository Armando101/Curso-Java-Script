export {};

// Por defecto los parámetros son de tipo any
// function createPicture(title, data, size) {
    
// }

type SquareSize = '100 X 100' | '500 X 500' | '1000 X 1000';


// Usamos TS, definimos tipos para parámetros
function createPicture(title:string, date: string, size: SquareSize) {
    console.log(title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500 X 500');
createPicture('Colombia Trip', '2020-03-20', '1000 X 1000');

// Parametros opcionales
// Colocamos un signo de interrogacion
function createOtherPicture(title?:string, date?: string, size?: SquareSize) {
    console.log(title, date, size);
}

// Ahora podemos no enviar ningun parámetro, o sólo uno, o los tres
createOtherPicture();

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    return { title, date, size };
}

const picture = createPic('Session', '2020-03-10', '100 X 100');

// Tipo de retorno con TS
function handleError(code: number, message: string): never | string {
    // Procesamiento del codigo, mensaje
    if (message === 'Error') {
        throw new Error(`${message}. Code error: ${code}`);
    } else {
        return 'An error has ocurred';
    }
}


try {
    let result = handleError(200, 'OK'); // Retorna string
    let error = handleError(400, 'Error'); // Retorna never    
} catch (error) {
    console.log('An error has ocurred ', error.message);
}

