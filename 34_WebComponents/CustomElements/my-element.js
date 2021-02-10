class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <h2>Un texto fuera de la section</h2>
      <section>
        <h2>Hola mundo</h2>
        <div>
          <p>Soy más texto de ejemplo</p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render()
  };

}

customElements.define('my-element', myElement);