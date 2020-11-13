// Tipos literales
// 100 X 100,  500 X 500, 1000 X 1000

type SquareSize = '100 X 100' | '500 X 500' | '1000 X 1000';

// Ahora sólo podemos ocupar las cadenas definidas anteriormente
let smallPicture: SquareSize = '100 X 100';