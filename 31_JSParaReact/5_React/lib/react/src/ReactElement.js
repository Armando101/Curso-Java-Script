/**
 * Coloca un atributo a un elemento HTML
 * @param {string} prop tipo de atributo que tendrá el elemento HTML
 * @param {string} value valor del atributo
 * @param {HTMLElement} element elemento html al que se le colocará el atributo
 * @returns {HTMLElement} elemento html con el atributo
 */
function setProperties(prop, value, element) {
  element.setAttribute(prop, value);
  return element;
}

/**
 * Crea un elemento listo para renderizar en el navagador
 * @param {string} type etiqueta
 * @param {object} props propiedades
 * @param {string} content contenido
 * @returns {HTMLElement} Elemento html
 */
export function createElement(type, props, content) {
  // Creando tipo de elemento
  const element = document.createElement(type);

  // Contenido
  if (content) {
    element.textContent = content;
  }

  // Propiedades
  Object.keys(props).forEach((prop) => setProperties(prop, props[prop], element));

  return element;
}