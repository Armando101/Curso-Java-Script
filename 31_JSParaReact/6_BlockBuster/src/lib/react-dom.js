/**
 * Renderiza un elemento en el navegador
 * @param {object} element instancia del elemento a renderizar
 * @param {HTMLElement} container Contenedor donde se renderizará el elemento 
 */
function render(element, container) {
  if (typeof element === 'string' || element instanceof Element) {
    return container.append(element);
  }
  function reRender(newChild) {
    container.replaceChild(newChild, chilElement);
    chilElement = newChild;
    // console.log(newChild);
  }
  element.update = reRender;
  let chilElement = element.build();
  container.append(chilElement);
  element.componentDidMount();
}

export {
  render
}