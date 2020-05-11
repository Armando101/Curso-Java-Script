const sinon = require('sinon'); // sinon nos permite hacer stub's

const { moviesMock, filteredMoviesMock } = require('./movies');

const getAllStub = sinon.stub();	// Crea un stub

// Indico que cuando ser mande llamar la collección movies resuleva con moviesMock
getAllStub.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
	getAll(collection, query) {
		return getAllStub(collection, query);
	}

	create(collection, data) {
		return createStub(collection, data);
	}
}

module.exports = {
	getAllStub,
	createStub,
	MongoLibMock
}