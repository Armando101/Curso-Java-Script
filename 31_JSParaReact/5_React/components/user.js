import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  state = {
    age: this.props.age
  };
  // constructor(props) {
  //   super(props);
  //   // Pasamos el this de User a la función
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // Tenemos que cambiar el this porque es una función normal y el this ocupa el del HtmlElement
  // handleClick(event) {
  //   console.log(this.props.name);
  //   // console.log(this);
  // }

  // Aquí this es el de User porque usamos una arrow function
  handleClick = (event) => {
    console.log(this.state);
    this.setState({
      age: this.state.age + 1
    });
  }
  render() {
    const {avatar, name} = this.props;
    const {age} = this.state;
    return createElement('div', {
      class: 'user', children: [
        createElement('div', {class: 'avatar', children:
          createElement('img', {src: avatar})
        }),
        createElement('h2', null, `Hola soy ${name} y tengo ${age} años`)
      ],
      onClick: this.handleClick,
      // Una opción sería agregar el evento de esta manera
      // onClick: function () {
      //   console.log('Hello World');
      // }
    });
  }
}

export default User;