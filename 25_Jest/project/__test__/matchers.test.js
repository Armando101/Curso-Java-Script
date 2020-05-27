describe('Comparadores comunes', () => {
	const user = {
		name: 'Armando',
		lastname: 'Rivera'
	}

	const user2 = {
		name: 'Armando',
		lastname: 'Rivera'
	}

	test('Igualdad de elementos', ()=> {
		expect(user).toEqual(user2);
	});

	// Podemos colocar negaciones con not
	/*
	test('No son exactamente iguales', () => {
		expect(user).not.toEqual(user2);
	})
	*/
});