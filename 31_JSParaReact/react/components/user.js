import { Component } from "../lib/react.js";

class User extends Component {
  render() {
    const {avatar, name} = this.props;
    return `
      <div class="user">
        <div class="avatar">
          <img src="./images/${avatar}" alt="user">
        </div>
        <h2>${name}</h2>
      </div>
    `;
  }
}

export default User;