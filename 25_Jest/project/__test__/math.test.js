import { sumar, multiplicar, restar, dividir } from '../math.js';

// Para correr las pruebas ejecutamos el comando jest

describe('Calculos matemáticos', ()=> {
	test('Sumas', ()=> {
		expect(sumar(1, 1)).toBe(2);
	});
	test('Multiplicar', ()=> {
		expect(multiplicar(2, 2)).toBe(4);
	});
	test('Restar', ()=> {
		expect(restar(2, 2)).toBe(0);
	});
	test('dividir', ()=> {
		expect(dividir(2, 2)).toBe(1);
	});
});