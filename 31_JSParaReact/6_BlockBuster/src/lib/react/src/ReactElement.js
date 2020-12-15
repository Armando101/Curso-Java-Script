import { render } from "../../react-dom.js";

/**
 * Coloca eventos en un elemento html
 * @param {HtmlElement} element elemento html para colocar el evento
 * @param {Event} event evento
 * @param {Function} callback función que se llamará cuando ocurra el evento
 */
function setEvents(element, event, callback) {
  element.addEventListener(event, callback);
}

/**
 * Renderiza un elemento o un arreglo de elementos hijos en el navegador
 * @param {HtmlElement} children elemento o arreglo de elementos hijos
 * @param {HtmlElement} container Contenedor o elemnto padre
 */
function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach(child => render(child, container));
  }
  return render(children, container);
}

/**
 * Esta función puede:
 * - Colocar un atributo, en el elemento html
 * - Agragar un evento al elemento
 * - Andiar elementos html
 * @param {string} prop tipo de atributo que tendrá el elemento HTML
 * @param {string} value valor del atributo
 * @param {HTMLElement} element elemento html al que se le colocará el atributo
 * @returns {HTMLElement} elemento html con el atributo
 */
function setProperties(prop, value, element) {
  // Event support
  if (prop.startsWith('on')) {
    const event = prop.replace('on', '').toLocaleLowerCase();
    return setEvents(element, event, value);
  }

  // Support for childre
  if (prop === 'children') {
    return renderChildren(value, element);
  }

  // Support for attributes
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
export function createElement(type, props, content='') {
  // Creando tipo de elemento
  const element = document.createElement(type);

  // Contenido
  if (content) {
    element.textContent = content;
  }

  // Propiedades
  if (props) {
    Object.keys(props).forEach((prop) => setProperties(prop, props[prop], element));
  }

  return element;
}