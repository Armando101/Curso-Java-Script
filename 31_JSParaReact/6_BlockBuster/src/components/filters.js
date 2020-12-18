import { Component, createElement } from "../lib/react/index.js";
import Select from './select.js';
import store from '../store.js';
import { SET_FILTER } from "../actions/index.js";

class Filters extends Component {

  handlechange = (event) => {
    store.dispatch({
      type: SET_FILTER,
      payload: event.target.value
    });
    event.target.value;
  }

  render() {
    return Select({
      onChange: this.handlechange,
      children: [
        createElement('option', {value: 'all'}, 'Todas'),
        createElement('option', {value: 'mostValued'}, 'Más valoradas'),
        createElement('option', {value: 'leastValued'}, 'Menos valoradas')
      ]
    });
  }
}

export default Filters;