import render from "./render.js";
import movies from "./movies.js";

const search = window['search-form'];

search.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const title = formData.get('title');
  const movies = filterByTitle(title);
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