const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
	async getMovies() {
		const movies = await Promise.resolve(moviesMock);
		return movies || [];
	}

	async getMovie() {
		const movies = await Promise.resolve(moviesMock[0].id);
		return movies || {};
	}

	async createMovie() {
		const createMoviesId = await Promise.resolve(moviesMock[0].id);
		return createMoviesId;
	}

	async updateMovie() {
		const updateMoviesId = await Promise.resolve(moviesMock[0].id);
		return updateMoviesId;
	}

	async updatePartialMovie() {
		const updatePartialMovieId = await Promise.resolve(moviesMock[0].id);
		return updatePartialMovieId;
	}

	async deleteMovie() {
		const delteMovieId = await Promise.resolve(moviesMock[0].id);
		return delteMovieId;
	}
}

module.exports = MoviesService;