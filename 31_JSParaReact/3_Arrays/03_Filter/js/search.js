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

function filterByTitle(title) {
  return movies.filter((movie) => {
    return cleanString(movie.title).includes(cleanString(title));
  });
}

function cleanString(phrase) {
  return phrase.toLocaleLowerCase().trim().replace(/ /g, '');
}