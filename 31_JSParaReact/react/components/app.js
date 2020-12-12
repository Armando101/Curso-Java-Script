import { Component } from "../lib/react.js";
import User from "./user.js";
import Wrapper from "./wrapper.js";

class App extends Component {
  render() {
    return `
      <div>
        ${new Wrapper({
          children: `
            <h1> React.js ⭐⭐⭐⭐⭐ </h1>
            ${new User({
              name: 'Ash',
              avatar: '../images/ash.jpg'
            }).render()}
          `
        }).render()}
      </div>
    `;
  }
}

export default App;