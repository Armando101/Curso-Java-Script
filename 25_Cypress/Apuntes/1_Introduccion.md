## ¿Qué es End-to-End Testing?

Para definir End-to-End Testing es necesario definir primero otros conceptos:

Testing: Es un proceso, un método de trabajo, una herramienta, que se utiliza para identificar fallas en el software o producto con el fin de que este alcance un grado aceptable de madurez y estabilidad antes de ser lanzado.

Según la Pirámide de testing, existen varios niveles:

- Unit Test o Pruebas Unitarias: permiten probar los elementos más fundamentales del software como objetos, funciones, eventos, etc.
- Component Tests o Pruebas de Componentes: permiten identificar fallas en componentes que incluyen varias funciones o elementos internos.
- Integration Tests o Pruebas de Integración: permiten probar el comportamiento y posibles fallas en la interacción entre los componentes entre sí, y demás elementos del software.
- GUI Test o End-to-end Tests: nos permiten identificar fallas en la interfaz de usuario. Es en este nivel de pruebas en el que nos enfocaremos en este curso. Es el testing más elaborado que existe, porque depende de los demás niveles.

Algunas características del End-to-end Testing:

- Prueba todo el flujo del software desde el punto de vista del usuario final.
- Prueba el software desde la interfáz de usuario y no desde el código interno.
- Está enfocado en detectar posibles problemas que pudieran encontrar nuestros usuarios en su interacción con el flujo general del programa.

## ¿Qué es Cypress?

Para llevar a cabo el End-to-end testing (e2e) es necesario disponer de una herramienta que simule la interacción de los usuarios con el browser. **Cypress** es esa herramienta o framework, que nos permite simular esa interacción. Ha sido producto de una evolución a partir de conceptos y frameworks anteriores como: Selenium, PhantomJS, Nightwatch y Puppeteer.

En el caso de que nuestro aplicativo requiera un backend será necesario utilizar una copia de este que sea lo más exacta posible a lo que estará luego en producción.

Principales ventajas

- No usa Selenium, por lo que es muy sencillo de integrar.
- Está hecho con Electron lo que le da acceso y control a una instancia de Chrome u otro navegador.
- Está enfocado exclusivamente en hacer e2e testing, y hacerlo muy bien.
- Funciona con cualquier librería o framework de frontend siempre que corran en un navegador.
- Los tests están escritos en JavaScript.
- Es un todo-en-uno, por lo que no requiere la instalación de paquetes de terceros para hacer su trabajo; sin embargo, se puede extender su funcionalidad con módulos adicionales.
- Es amigable con desarrolladores de QA.
- Es mucho más rápido que cualquier otra alternativa existente a la fecha.
