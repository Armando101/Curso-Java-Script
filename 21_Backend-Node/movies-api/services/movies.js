// const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');

class MoviesService {
	constructor() {
		this.collection = 'movies';
		this.mongoDB = new MongoLib();
	}

	async getMovies({ tags }) {
		const query = tags && { tags: { $in: tags }}
		const movies = await this.mongoDB.getAll(this.collection, query);
		return movies || [];
	}

	async getMovie({ movieId }) {
		const movies = await this.mongoDB.get(this.collection, movieId);
		return movies || {};
	}

	async createMovie({ movie }) {
		const createMoviesId = await this.mongoDB.create(this.collection, movie);
		return createMoviesId;
	}

	async updateMovie({ movieId, movie } = {}) {
		const updateMoviesId = await this.mongoDB.update(this.collection, movieId, movie);
		return updateMoviesId;
	}

	async deleteMovie({ movieId }) {
		const delteMovieId = await this.mongoDB.delete(this.collection, movieId);
		return delteMovieId;
	}
}

module.exports = MoviesService;