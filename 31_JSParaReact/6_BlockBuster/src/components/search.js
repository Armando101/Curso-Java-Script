import { SEARCH_MOVIE, SET_FILTER } from '../actions/index.js';
import { Component } from '../lib/react/index.js';
import store from '../store.js';
import button from './button.js';
import Form from "./form.js";
import input from './input.js';

class Search extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get('title');
    if (query) {
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query
      })
    }

    return store.dispatch({
      type: SET_FILTER,
      payload: 'all'
    })

  }

  render() {
    return Form({
      onSubmit: this.handleSubmit,
      children: [
        new input({
          placeholder:' Escribe tu película favorita',
          name: 'title',
          type: 'text'
        }),
        new button(null, 'Buscar')
      ]
    })
  }

}

export default Search;