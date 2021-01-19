/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

// Web API
// Conectamos al server
window
  .fetch(url)
  // Procesar la respuesta y convertirla en JSON
  .then((response) => response.json())
  .then(responseJSON => {
    const allItems = [];
    responseJSON.data.forEach(item => {
      // Crear imagen
      const image = document.createElement('img');

      // Crear título
      const title = document.createElement('h2');
      
      // Crear precio
      const price = document.createElement('div');

      // Crear contenedor
      const container = document.createElement('div');
      container.append(image, title, price);

      allItems.push(container);
    });
    document.body.append(...allItems)
  });