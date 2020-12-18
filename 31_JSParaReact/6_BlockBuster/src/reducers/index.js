import { ADD_MOVIES, SEARCH_MOVIE, SET_FILTER } from "../actions/index.js";
import { 
  movieListAsMap,
  getAllIds,
  getNotPopular,
  getMostValuedIds
} from "../normalize.js";

/**
 * Encuentra las coincidencias de la cadena a buscar y el listado de películas
 * @param {string} title titulo a buscar
 * @returns {Array<object>} Lista de películas que coincidan con la string a buscar
 */
function filterByTitle(title, movies) {
  const list = [];
  movies.forEach((movie) => {
    if (cleanString(movie.title).includes(cleanString(title))) {
      list.push(movie.id);
    }
  });

  return list;
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
function findById(id, allIds) {
  const parseId = parseInt(id, 10);
  if (allIds.includes(parseId)) {
    return [parseId];
  }
  return allIds;
} 

/**
 * Busca una o varias películas dado una query, puede ser el id o el titulo
 * @param {string} query criterio de búsqueda
 * @returns {Array<object>} Peliculas a renderizar
 */
function searchMovie(query, list, allIds) {
  if (isNaN(query) || query === '') {
    return filterByTitle(query, list);
  }
  return findById(query, allIds);
}

const reducer = (state, { type, payload }) => {
  switch(type) {
    case ADD_MOVIES:
      const movieList = movieListAsMap(payload, state.movieList);
      const all = getAllIds(payload, state.list.all);
      const leastValued = getNotPopular(payload, state.list.leastValued);
      const mostValued = getMostValuedIds(payload, state.list.mostValued);
      return {
        ...state,
        movieList,
        list: {
          ...state.list,
          all,
          leastValued,
          mostValued
        }
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload
      };
    case SEARCH_MOVIE: 
      return {
        ...state,
        filter: 'search',
        list: {
          ...state.list,
          search: searchMovie(payload, state.movieList, state.list.all)
        }
      }
    default:
      return state;
  }
}

export {reducer};