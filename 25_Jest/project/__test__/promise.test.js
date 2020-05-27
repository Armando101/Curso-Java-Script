import { getDataFromApi } from '../promise';

describe('Probando promesas', ()=> {
	test('Realizando una petición a una api', done=> {
		const api = 'https://rickandmortyapi.com/api/character/';
		getDataFromApi(api).then(data => {
			expect(data.results.length).toBeGreaterThan(0);
			done();
		});
	});
});