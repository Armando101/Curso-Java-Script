import { Component } from '../lib/react/index.js';
import button from './button.js';
import Form from "./form.js";
import input from './input.js';

class Search extends Component {
  render() {
    return Form({
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