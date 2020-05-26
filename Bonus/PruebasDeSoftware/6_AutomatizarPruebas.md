# Automatización de Pruebas

## ¿Cuándo estamos listos para automatizar?
- Tenemos pruebas repetitivas
- Buscamos optimizar la ejecución de pruebas
- Hemos definido un Framework

Podemos automatizar las siguientes tipos de pruebas.

- Pruebas unitarias: Tienen que ver con un pedazo de código que el desarrollador esta codificando, pero no tienen que ver con todo el flujo de negocio y proceso del software.

- Pruebas de integración: Cómo hacemos que el conjunto del equipo que libera pedacitos de software funcionen juntos y no hagan defectos adicionales.

- Pruebas funcionales o de aceptación: Estas pruebas no necesariamente forman parte de los requerimientos especificados por el cliente, una recomendación para automatizar estas pruebas es que deban cumplir con los requerimientos dados por el cliente.

Test Driven Development: El desarrollo va a estar enfocado haciendo primera las pruebas y después el código. Haciendo que el desarollo sea muy específico con la mayor cobertura y no pongamos líneas de código que no van a funcionar o no se usan.

- Escribimos una prueba
- Ejecutamos la prueba: Falla
- Se escribe el código
- Ejecutamos la prueba: Pasa

Behavior Driven Development: Si primeros vamos a escribir las pruebas, debemos hacerlo bien y usando un lenguaje sencillo, simple para que la sirva al equipo para entender qué es lo que queremos hacer.

## Gherkin

Gherkin es un lenguaje de texto plano con estructura, usamos palabras que no son comandos pero permiten entender en un modo de pseudocódigo qué es lo que se tiene que hacer. Esta diseñado para ser fácil de aprender y ser entendido por todos.

Ventajas

- Simple
- Palabras claves o keywords
- Estandariza los casos de uso
- Reduce el tiempo de diseño

### Ejemplo
__Feature__: El usuario abre una puerta de perilla para salir # Comentarios.  
__Scenario__: El usuario tiene una puerta cerrada.  
__Given__: Girando la perilla.  
__And__: Empujando la puerta.  
__When__: la puerta abre hacia afuera.  
__Then__: la puerta queda abierta.  
__And__: el usuario puede salir.  