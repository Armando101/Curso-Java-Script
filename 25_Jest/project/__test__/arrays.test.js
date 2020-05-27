import { arrayFruits, arrayColors } from '../array';

describe('Comprobaremos que esiste un elemento', () => {
	test('¿Contiene una banana?', () => {
		expect(arrayFruits()).toContain('banana');
	});

	test('No contiene un Plátano', () => {
		expect(arrayFruits()).not.toContain('platano');
	});

	test('Comprobar el tamaño de un arreglo', () => {
		expect(arrayFruits()).toHaveLength(5);
	});

	test('Comprobamos que existe un color', ()=> {
		expect(arrayColors()).toContain('azul');
	});
});