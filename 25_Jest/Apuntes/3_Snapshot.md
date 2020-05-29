## Snapshot Testing

Los snapshots nos garantizan que vamos a asegurar o que no vaya a pasar algún cambio inesperado en nuestra UI. Comprobamos lo que tenemos en este caso jest contra lo que estamos trayendo y que no deben de cambiar. Ya que esto lo usamos para casos en donde cierto datos en particulares rara vez deben de cambiar.

Ejemplo: Un icono que lo traigamos de alguna petición http. Entonces evaluaremos el cambio contra la prueba que tenemos en jest.

En caso de que queramos aceptar el cambio agregamos el flag -u.s