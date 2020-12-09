import { isRequired } from "./validations.js";

function makeIceCream(flavor1 = isRequired('flavor1'), flavor2 = isRequired('flavor1')) {
  alert(`Tienes un rico helado de ${flavor1.dataset.flavor} con ${flavor2.dataset.flavor}`);
}

export {
  makeIceCream
}