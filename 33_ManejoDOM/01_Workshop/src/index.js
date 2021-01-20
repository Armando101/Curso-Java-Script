/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');
appNode.addEventListener('click', () => {
  if (event.target.nodeName === 'H2') {
    window.alert('Hello');
  }
})
// Intl
// Est API Sirve para dar formato a:
// 1- Fechas
// 2- Monedas

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price);

  return newPrice;
}

// Web API
// Conectamos al server
window
  .fetch(baseUrl+'/api/avo')
  // Procesar la respuesta y convertirla en JSON
  .then((response) => response.json())
  .then(responseJSON => {
    const allItems = [];
    responseJSON.data.forEach(item => {
      // Crear imagen
      const image = document.createElement('img');
      image.className =
      "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
      image.src = baseUrl+item.image;
      
      // Crear título
      const title = document.createElement('h2');
      title.className = "text-lg";
      title.textContent = item.name;

      // Crear precio
      const price = document.createElement('div');
      price.className = "text-gray-600";
      price.textContent = formatPrice(item.price);

      // Crear contenedor
      const container = document.createElement('div');
      container.append(image, title, price);
      container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";

      allItems.push(container);
    });
    appNode.append(...allItems)
  });