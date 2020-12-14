const styled = {
  h1: function (styles) {
    return function (content) {
      return `
        <h1 class=${styles}>
          ${content}
        </h1>
      `;
    }
  },
  h2: '',
  div: function (styles) {
    return function (content) {
      return `
        <div style="${styles}">
          ${content}
        </div>
      `;
    }
  },
  img: function (styles) {
    return function (content) {
      return `
        <img style="${styles}" ${content}>
      `;
    }
  }
}

export default styled;