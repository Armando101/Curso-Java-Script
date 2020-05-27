import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('Probar resultados nulos', ()=> {
	test('null', ()=> {
		expect(isNull()).toBeNull();
	});
});

describe('Probar resultados verdaderos', ()=> {
	test('Verdadero', ()=> {
		expect(isTrue()).toBeTruthy();
	});
});

describe('Probar resultados falsos', ()=> {
	test('Falsos', ()=> {
		expect(isFalse()).toBeFalsy();
	});
});


describe('Probar resultados undefined', ()=> {
	test('Valor Undefined', ()=> {
		expect(isUndefined()).toBeUndefined();
	});
});

describe('Probar resultados no verdaderos', ()=> {
	test('Falso o Verdadero', ()=> {
		expect(isFalse()).not.toBeTruthy();
	});
});	