class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  /**
   * Atributos que vamos a estar observando si hay algún cambio
   * @returns {string[]} atributos a ser observados
   */
  static get observedAttributes() {
    return ['title', 'parrafo', 'img'];
  }

  /**
   * Se manda a llamar cuando cambia un atributo
   * @param {string} attr nombre del atributo actual
   * @param {*} oldVal valor anterior
   * @param {*} newVal nuevo valor en caso de que exista
   */
  attributeChangedCallback(attr, oldVal, newVal) {
    if ( attr === 'title') {
      this.title = newVal;
    }

    if ( attr === 'parrafo') {
      this.parrafo = newVal;
    }

    if ( attr === 'img') {
      this.img = newVal;
    }
  }

  /**
   * Construye un template con lo necesario para el componente
   * @returns {HTMLTemplateElement} template con el componente
   */
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
          <p>${this.parrafo}</p>
          <img src=${this.img} alt=""/>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }

  /**
   * Definimos los estilos del componente
   * @returns {string} estilos a aplicar en el componente
   */
  getStyles() {
    return `
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }

  /**
   * Renderiza el componente
   */
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  /**
   * Se manda a llamar cuando se inicializa el componente
   */
  connectedCallback() {
    this.render()
  };

}

customElements.define('my-element', myElement);