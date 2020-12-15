import { createElement } from './react/index.js';
const styled = {};

const elements = [
  'h1',
  'p',
  'div',
  'img',
  'article',
  'footer',
  'form',
  'input',
  'select',
  'header',
  'button',
  'section'
];

/**
 * Genera los estilos dinámicos
 * @param {Array<string>} strings Arreglo de estilos fijos y claves de estilos dinámicos
 * @param {Array<string>} dynamicValues Arreglo de valores de estilos dinámicos
 * @param {object} props Objeto de propiedades
 * @returns {string} estilos en formato de string
 */
function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice();
  dynamicValues.forEach((value, index) => {
    style[index] += value(props);
  });
  return style.join('');
}

elements.forEach((tag) => {
  /**
   * Agrega estilos tanto fijos como dinámicos
   * @param {Array<string>} strings Arreglo de estilos fijos y claves de estilos dinámicos
   * @param  {...any} dynamicValues Arreglo de valores de estilos dinámicos
   */
  styled[tag] = function (strings, ...dynamicValues) {
    /**
     * @param {object} props propiedades del elemento
     * @param {content} content contenido del elemento
     */
    return function (props, content) {
      const style = buildStyles(strings, dynamicValues, props);
      return createElement(tag, {
        ...props,
        style
      }, content);
    }
  }
});


export default styled;