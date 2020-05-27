describe('Comprobar cadenas de texto', ()=> {
	
	const text = 'Un bonito texto';

	test('Debe contener el siguiente texto', () => {
		expect(text).toMatch(/bonito/);
	});

	test('No contiene el siguiente texto', () => {
		expect(text).not.toMatch(/es/);
	});

	test('Comprobar el tamaño de un texto', ()=> {
		expect(text).toHaveLength(15);
	});
});