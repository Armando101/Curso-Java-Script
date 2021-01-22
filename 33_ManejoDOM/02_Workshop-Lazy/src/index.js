import { registerImage } from './lazy.js';

// Crear (1) imagen y agregarla al contendor
const minimun = 1;
const maximum = 122;
const random = () => Math.floor((Math.random() * (maximum - minimun)) + 1);

const createImageNode = () => {
  const container = document.createElement('div');
  const imageWrapper = document.createElement("div");

  container.className = 'p-4';
  imageWrapper.className = "bg-gray-300";
  imageWrapper.style.minHeight = "200px";
  imageWrapper.style.display = "inline-block";

  const image = document.createElement('img');
  image.className = 'mx-auto';
  image.width = "320";

  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

  imageWrapper.appendChild(image);
  container.appendChild(imageWrapper);

  return container;
}

const mountNode = document.getElementById('images');
const addButton = document.querySelector('button');
const cleanButton = document.querySelector('#clean');

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registerImage(newImage);
}

addButton.addEventListener('click', addImage);
cleanButton.addEventListener('click', () => {
  const listNode = mountNode.childNodes;
  [...listNode].forEach(node => {
    node.remove();
  });
});