/*
	Enum es un tipo de dato que nos permite tomar un conjunto de datos numéricos y colocarle un nombre con el fin de ser mas específicos
*/

enum Tallas { Chica = 1, Mediana = 2, Grande = 3 }

// Si no asigno valores por defecto asigna: 0, 1, 2
enum PaymentState { Creado, Pagado, Deuda };

class Pedido {
	talla: number;
}

const pedido: Pedido = new Pedido();

pedido.talla = Tallas.Chica;

console.log(PaymentState.Deuda);	// 2