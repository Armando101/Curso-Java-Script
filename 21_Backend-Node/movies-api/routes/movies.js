const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
	const router = express.Router();
	app.use('/api/movies', router);
	
	// Instanciamos un nuevo servicio
	const moviesService = new MoviesService();

	// Get que devuelve todos los datos
	router.get('/', async function (req, res, next) {
		const { tags } = req.query;
		try	{
			const movies = await moviesService.getMovies({ tags });
			res.status(200).json({
				data: movies,
				message: 'movies listed'
			})
		} catch (error) {
			next(error);
		}
	});

	router.get('/:movieId', async function (req, res, next) {
		const { movieId } = req.params; 
		try	{
			const movies = await moviesService.getMovie({ movieId });
			res.status(200).json({
				data: movies,
				message: 'movie listed'
			})
		} catch (error) {
			next(error);
		}
	});

	router.post('/', async function (req, res, next) {
		const { body: movie } = req.body;
		try	{
			const createMovieId = await moviesService.createMovie({ movie });
			res.status(201).json({
				data: createMovieId,
				message: 'movie created'
			})
		} catch (error) {
			next(error);
		}
	});

	router.put('/:movieId', async function (req, res, next) {
		const { movieId } = req.params;
		const { body: movie } = req.body;

		try	{
			const updatedMoviesId = await moviesService.updateMovie({ movieId, movie });
			res.status(200).json({
				data: updatedMoviesId,
				message: 'movie updated'
			})
		} catch (error) {
			next(error);
		}
	});

	router.patch('/:movieId', async function (req, res, next) {
		const { movieId } = req.params;
		const { body: movie } = req.body;

		try	{
			const updatedMoviesId = await moviesService.updatePartialMovie({ movieId, movie });
			res.status(200).json({
				data: updatedMoviesId,
				message: 'movie updated'
			})
		} catch (error) {
			next(error);
		}
	});

	router.delete('/:movieId', async function (req, res, next) {
		const { movieId } = req.params;

		try	{
			const deleteMovies = await moviesService.deleteMovie({ movieId });
			res.status(200).json({
				data: deleteMovies,
				message: 'movie deleted'
			})
		} catch (error) {
			next(error);
		}
	});
}

module.exports = moviesApi;