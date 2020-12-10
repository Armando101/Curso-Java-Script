
/**
 * Construye el componente de película
 * @param {string} title Titulo de la película 
 * @param {string} poster_path Imagen de la película 
 * @param {number} vote_average Calificación de la película 
 * @param {number} id id de la película 
 * @param {boolean} recommended Sí la película es recomendada o no 
 * @return {HTMLArticleElement} Componente HTML listo para introducirlo en el navegador
 */
function buildElement({title, poster_path, vote_average, id, recommended}) {
  const template = `
    <article class="movie ${recommended ? 'recommended' : ''}">
      <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="">
      <p class="movie-title">${title}</p>
      <p class="movie-id">${id}</p>
      <span class="movie-rate">${vote_average}</span>
    </article>
  `;

  const movie = document.createElement('div');
  movie.innerHTML = template;

  return movie.firstElementChild;
}

/**
 * Renderiza un objeto de tipo película en el navegador
 * @param {object} movie Objeto de tipo película
 */
function renderElement(movie) {
  const element = buildElement(movie);
  window.container.append(element);
}

/**
 * Borra todo el html que ya existía en el elemento container
 */
function cleanMovieList() {
  window.container.innerHTML = '';
}

/**
 * Se encarga de renderizar una lista de películas
 * @param {Array<object>} list Lista de películas
 */
export default function renderMovieList(list) {
  cleanMovieList()
  list.forEach(renderElement);
}