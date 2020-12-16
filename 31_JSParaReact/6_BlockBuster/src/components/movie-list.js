import { Component } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';
import WrapperStyled from './wrapper.js';
import Movie from './movie.js';
import store from '../store.js';

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  state = {
    movies: store.getState().movieList
  }
  render() {
    const { movies } = this.state;
    return WrapperStyled({
      children: MovieListStyled({
        children: movies.map(movie => new Movie(movie))
      })
    });
  }
}

export default MovieList;