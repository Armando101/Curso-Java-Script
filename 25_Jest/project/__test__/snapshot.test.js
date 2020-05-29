import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
	test('Snapshot', () => {
		expect(getCharacter(rick)).toMatchSnapshot();
	});

	test('Siempre fallara la instantanea', () => {
		const user = {
			createAt: new Date(),
			id: Math.floor(Math.random() * 20),
		};
		expect(user).toMatchSnapshot();
	});

	test('Tenemos una excpecion', ()=> {
		const user = {
			id: Math.floor(Math.random() * 20),
			name: 'Armando Rivera'
		}
		expect(user).toMatchSnapshot({
			id: expect.any(Number) 	// Indico que no importa el id en la comparacion con el snapshot
		});
	});
});