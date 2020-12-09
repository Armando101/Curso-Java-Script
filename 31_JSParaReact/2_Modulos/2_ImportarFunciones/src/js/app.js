import { BURN } from "./actions/index.js";
import store from "./store.js";

store.subsribe(() => {
  window.result.textContent = `Haz quemado: ${store.getState()} calorias`;
});

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42
  });
}

window.burn.addEventListener('click', burn);
