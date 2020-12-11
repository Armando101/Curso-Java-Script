/**
 * Renderiza un elemento en el navegador
 * @param {object} element instancia del elemento a renderizar
 * @param {HTMLElement} container Contenedor donde se renderizará el elemento 
 */
function render(element, container) {
  container.innerHTML = element.render();
}

export {
  render
}