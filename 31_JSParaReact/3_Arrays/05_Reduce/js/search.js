import render from "./render.js";
import movies from "./movies.js";

const search = window['search-form'];

search.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const query = formData.get('title');
  const movies = searchMovie(query);
  render(movies);
});

/**
 * Encuentra las coincidencias de la cadena a buscar y el listado de películas
 * @param {string} title titulo a buscar
 * @returns {Array<object>} Lista de películas que coincidan con la string a buscar
 */
function filterByTitle(title) {
  return movies.filter((movie) => {
    return cleanString(movie.title).includes(cleanString(title));
  });
}

/**
 * Convierte la string a minúsculas y quita los espacios
 * @param {string} phrase texto a limpliar
 */
function cleanString(phrase) {
  return phrase.toLocaleLowerCase().trim().replace(/ /g, '');
}

/**
 * Encuentra una pelícuala dado un id
 * @param {string} id id de la película a buscar
 * @returns {object} Un objeto de tipo película
 */
function findById(id) {
  return movies.find((movie) => {
    return movie.id === parseInt(id, 10);
  });
} 

/**
 * Busca una o varias películas dado una query, puede ser el id o el titulo
 * @param {string} query criterio de búsqueda
 * @returns {Array<object>} Peliculas a renderizar
 */
function searchMovie(query) {
  if (isNaN(query) || query === '') {
    return filterByTitle(query);
  }
  return [findById(query)];
}