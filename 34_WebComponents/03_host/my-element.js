class myElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open',
    });
  }

  // El host le da estulos al componente en sí
  getStyles() {
    return `
    <style>
      /* Dar estilos al elemento en sí */
      :host {
        display: inline-block;
        width: 100%;
        min-width: 300px;
        max-width: 450px;
        font-size: 24px;
        background-color: papayawhip;
      }

      /* Dar estilos de este componente sólo si tiene cierta clase */
      :host(.blue) {
        background-color: blue;
      }

      /* Dar estilos al componente sólo sí tiene este atributo */
      :host([yellow]) {
        background-color: yellow;
      }
      
      /* Dar estilos al componente sólo sí está dentro de un article con clase card */
      :host-context(article.card) {
        display: block;
        max-width: 100%;
      }

      /* Dar estilos al h1 del componente sólo si tiene este atribto*/
      :host([yellow]) h1 {
        color: darkred;
      }
    </style>`;
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h1>
          <slot name="title"></slot>
        </h1>
        <div>
          <p>
            <slot name="parrafo"></slot>
          </p>
        </div>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myElement);
