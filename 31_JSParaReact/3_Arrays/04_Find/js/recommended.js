import movies from './movies.js';
import render from './render.js';

const $button = window.recommended;

$button.addEventListener('click', () => {
  render(setRecomendedMovies(movies));
});

/**
 * Se encarga de mapear una lista de películas y agregar el campo recommended
 * setteado en true o false dependiendo si la película es recomendable o no
 * @param {object} movies lista de películas
 * @returns {Array<object>} Arreglo de peliculas con el campo recommended
 */
function setRecomendedMovies(movies) {
  return movies.map((movie) => {
    return {...movie, recommended: movie.vote_average > 7}
  });
  // console.table(newMovies, ['title', 'recommended']);
}