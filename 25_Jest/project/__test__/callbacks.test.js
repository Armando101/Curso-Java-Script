import { callbackHell } from '../callbacks';

describe('Probando un callback', () => {
	test('Callback', done=> {
		function otherCallback(data) {
			expect(data).toBe('Hola JavaScript');
			done();	// Indico a Jest que ya terminé la prueba
		}
		callbackHell(otherCallback);
	});
});