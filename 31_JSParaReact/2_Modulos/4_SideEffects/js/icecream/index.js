import { makeIceCream } from "./icecream-machine.js";

const $flavors = document.querySelectorAll('.flavor');
function selectFlavor() {
  this.classList.toggle('is-active');
}

console.log($flavors);

$flavors.forEach($element => $element.addEventListener('click', selectFlavor));
window.btn.addEventListener('click', (params) => {
  const $flavors = document.querySelectorAll('.flavor.is-active');
  console.log($flavors);

  try {
    makeIceCream($flavors[0], $flavors[1]);
  } catch {
    alert('Elije dos sabores');
  }
});