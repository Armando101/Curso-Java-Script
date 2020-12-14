/**
 * Renderiza un elemento en el navegador
 * @param {object} element instancia del elemento a renderizar
 * @param {HTMLElement} container Contenedor donde se renderizará el elemento 
 */
function render(element, container) {
  if (typeof element === 'string' || element instanceof Element) {
    return container.append(element);
  }
  const chilElement = element.render();
  container.append(chilElement);
}

export {
  render
}