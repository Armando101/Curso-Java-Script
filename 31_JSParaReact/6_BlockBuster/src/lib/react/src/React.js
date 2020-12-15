class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  update() {}

  #updater() {
    this.update(this.render());
    this.componentDidUpdate();
  }

  /**
   * Se manda a llamar antes que ser renderice el componente
   */
  componentWilMount() {
    
  }

  /**
   * Cuando el componente ya se renderizó
   */
  componentDidMount() {

  }

  /**
   * Cuando el componente se actualiza
   */
  componentDidUpdate() {

  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    }
    this.#updater();
  }

  build() {
    this.componentWilMount();
    return this.render();
  }

}

export {
  Component
}