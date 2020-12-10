import { renderMovieListFromMap } from "./render.js";
import { all, movieList, notPopular, popular } from "./normalize.js";

filter.addEventListener('change', function() {
  switch (this.value) {
    case 'most-valued':
      return renderMovieListFromMap(popular, movieList);
    case 'least-valued':
      return renderMovieListFromMap(notPopular, movieList);
    default:
      return renderMovieListFromMap(all, movieList);
  }
});