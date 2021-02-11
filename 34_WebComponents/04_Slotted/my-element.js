class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
  }

  getStyles() {
    return `
      <style>
        ::slotted(*) {
          font-size: 30px;
          color: red;
        }

        ::slotted(.text) {
          color: blue;
        }

      </style>
    `;
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h1>
          <slot name="title"></slot>
        </h1>
        <p>
          <slot name="parrafo"></slot>
        </p>
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

customElements.define('my-element', MyElement);
