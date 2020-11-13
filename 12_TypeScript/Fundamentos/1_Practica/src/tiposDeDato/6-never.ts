
function handleError(code:number, message: string): never {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch (error) {
    console.error(error);
}


function sumNumbers(limit: number): never {
    let suma = 0;
    while (true) {
        suma++;
    }
}