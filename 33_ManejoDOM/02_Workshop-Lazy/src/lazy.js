/**
 * Indica si la imagen esta intersectada o no en el view port
 * @param {any} entry entrada, en este caso una imagen
 * @returns {boolean} esta intersectada o no
 */
const isIntersecting = (entry) => {
  return entry.isIntersecting;
}

const action = (entry) => {
  const nodo = entry.target;
  console.log('Holis');

  // Deja de escuchar la imágen (unlisten)
  // Esto porque una vez que ya se escuchó ya no queremos que siga escuchando
  // Sólo una vez y listo
  observer.unobserve(nodo);
}

/**
 * observador que toma las entradas y las filtra
 */
const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries
    .filter(isIntersecting)
    .forEach(action)
});

export const registerImage = (imagen) => {
  // intersectionObserver -> observer (imagen)
  observer.observe(imagen);
}