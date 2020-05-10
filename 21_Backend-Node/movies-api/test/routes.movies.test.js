// Es importante que este archivo termine en .test.js

// Este test sólo es para rutas
const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MovieServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('route - movies', function() {
	const route = proxyquire('../routes/movies', {
		// cada vez que llamemos la ruta en realidad llamará a MoviesServiceMock
		// Esto porque ../routes/movies tiene una instancia de la clase que está en ../services/movies
		// Esta llama a la base de datos de mongo pero no queremos esa base de datos
		// Por eso remplazamos la BD con MovieServiceMock
		'../services/movies': MovieServiceMock	
	});

	const request = testServer(route);

	describe('GET /movies', function() {
		it('should respond with status 200', function(done) {
			// Done indica que terminamos el test
			request.get('/api/movies').expect(200, done);
		});

		it('should respond with the list of movies', function(done) {
			// Done indica que terminamos el test
			request.get('/api/movies').end((err, res) => {
				assert.deepEqual(res.body, {
					data: moviesMock,
					message: 'movies listed'
				});
				done();
			});
		});
	});
});