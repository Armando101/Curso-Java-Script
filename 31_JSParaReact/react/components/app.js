import { Component } from "../lib/react.js";
import User from "./user.js";
import Wrapper from "./wrapper.js";
import UserStyled from "./user-styled.js";

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
        ${new UserStyled({
            name: 'Ash',
            avatar: '../images/ash.jpg'
        }).render()}
      </div>
    `;
  }
}

export default App;