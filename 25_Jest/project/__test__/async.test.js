import { getDataFromApi } from '../promise';

describe('Probar Async/Await', ()=> {
	// En esta caso ya no utilizamos el done
	// Esto debido a que ya se espera con el await
	test('Realizar una petición a una api', async () => {
		const api = 'https://rickandmortyapi.com/api/character/';
		const getRick = 'https://rickandmortyapi.com/api/character/1';
		
		const characters = await getDataFromApi(api);
		expect(characters.results.length).toBeGreaterThan(0);

		const rick = await getDataFromApi(getRick);
		expect(rick.name).toEqual('Rick Sanchez');
	});
});