const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
	const router = express.Router();
	app.use('/api/movies', router);

	// Get que devuelve todos los datos
	router.get('/', async function (req, res, next) {
		try	{
			const movies = await Promise.resolve(moviesMock);
			res.status(200).json({
				data: movies,
				message: 'movies listed'
			})
		} catch (error) {
			next(error);
		}
	});

	router.get('/:movieId', async function (req, res, next) {
		try	{
			const movies = await Promise.resolve(moviesMock[0]);
			res.status(200).json({
				data: movies,
				message: 'movie listed'
			})
		} catch (error) {
			next(error);
		}
	});

	router.post('/', async function (req, res, next) {
		try	{
			const createMovieId = await Promise.resolve(moviesMock[0].id);
			res.status(201).json({
				data: createMovieId,
				message: 'movie created'
			})
		} catch (error) {
			next(error);
		}
	});

	router.put('/:movieId', async function (req, res, next) {
		try	{
			const updatedMoviesId = await Promise.resolve(moviesMock[0].id);
			res.status(200).json({
				data: updatedMoviesId,
				message: 'movie updated'
			})
		} catch (error) {
			next(error);
		}
	});

	router.delete('/:movieId', async function (req, res, next) {
		try	{
			const deleteMovies = await Promise.resolve(moviesMock[0].id);
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