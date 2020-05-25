# Bugs
## Retrabajo

Es necesario identificar cada uno de los roles y responsabilidades para después evaluar si se esta haciendo o no re trabajo, es decir estamos utilizando tiempo que podría ser utilizado en otras actividades o sencillamente que no debería hacerse

También es necesario medir el rendimiento de nuestro trabajo y herramientas que nos permitan conocer paso a paso cómo vamos avanzado en el proceso de manera individual o en equipo.


__Retrabajo__: Es la principal causa del retraso, de que la estimación de tiempo falle, de que costos suban. Cuando éstos suceden aumentamos exponencialmente el trabajo de todos

- Falta o mala documentación
- Falta de capacitación o dominio en las herramientas utilizadas
- Falta de capacitación o dominio en el software a desarrollar
- Falta de comunicación

Un _dashboard_ puede ser una herramienta útil que mantiene informado a todo el equipo acerca del estatus de las pruebas.

### Acciones de control
- Si identificamos un riesgo: lo más importante es reportar cuando hay un riesgo o las tareas no serán concluidas a tiempo.
- Si identificamos falta de ambientes: no hacer pruebas sobre ambientes caducados o desactualizados.
- Si el criterio de salida no se cumple: puede que se hagan las pruebas pero si no es lo esperado hay que volvera a realizar el proceso.

### Resultado de las pruebas
Aquí hay valores como: cuántas pruebas se han ejecutado, cuántas se han completado, etc.

### Desempeño del equipo de testing
Qué pasa si no hay interntet, el cliente no entregó el material necesario, falta alguien del equipo, etc.

## Sistema de seguimiento de bugs

La mala administración, malas prácticas o falta de seguimiento entorpece las tareas de todo el equipo sino que además sumamos el retrabajo en la mala documentación puede que nuestro proyecto se salga de presupuesto o tiempo.

### Razones por las que aparecen defectos:
Pueden aparecer en diferentes etapas y depende de las herramientas que tenga el equipo para gestionar sus actividades.

- Hay presión de tiempo en la entrega del software
- Descuidos en el diseño
- Inexperiencia o falta de conocimiento
- Falta de comunicación en los requerimientos
- Diseño complejo de código
- Desconocimiento de las tecnologías usadas

### Preguntas a realizar para construir un proceso de gestión de bugs:

- ¿Qué debe de hacer la persona que encuentre el defecto?
- ¿En qué herramienta debe documentar el defecto?
- ¿Cómo vamos a almacenar la información?
- ¿Qué información requiere el equipo de desarrollo para poder resolver un defecto?
- ¿Cuáles son los estatus que se manejan para que fluya la resolución del defecto?
- ¿Cuáles son los criterios de aceptación de cierre del defecto?

### Ciclo de gestión
1. Reportado.
	- es revisado, paso 2
	- Mal reporte, rechazado, reescrito y pasa al paso 1.
2. Abiertos
	- Aprobado para reparación, pasamos al paso 3
	- Declinado para reparación, Diferido, Nueva información obtenida y pasa al paso 2.
3. Asignado, reparado
4. Arreglado
	- confirmación exitosa: Cerrado
	- Falla prueba de confiramción: Reabierto, aprobado para volver a reparar y pasa al paso 3.

### Repositorio y monitorea de defectos
Una vez instaurado el proceso de gestión de bugs, también se debe precisar quién tiene acceso a los bugs y cuáles son los permisos que tiene, por cuánto tiempo se almacenan, etc.

## Defectos y sugerencias

Dependiendo del objetivo d	el proyecto podemos encontrar que no todos quieren que des sugerencias, solo encuentres defectos. Cosas que pongan en riesgo por costo, prestigio o calidad del producto.

**Defectos**: Es aquello que no cumple los requerimientos funciones, de diseño, de arquitectura y es la consecuencia de un error humano en el código o la interpretación de la información.

**Sugerencias**: Es cómo la experiencia del usuario se ve afectado. La lentitud del proyecto, la legibilidad, combinación de colores, la forma de navegar no es adecuada.

### Ejemplos de sugerencias
- El mensaje de error no comunica adecuadamente. Considerar las personas que no ven, escuchan, etc.
- El color de la pantalla, no contrasta bien con el texto.
- No recibí un correo adicional de confirmación.

_Si la calidad la define el usuario final... sus sugerencias se vuelven defectos_

### Sugerencias convertidas en defectos / Actualizaciónes de software
- Hace lenta la operación
- Detiene parcial o totalmente el proceso
- El contenido o el flujo confunde al usuario
- Deja comentar muchos errores al usuario
- La traducción o el lenguaje empleado no es correcto
- No funciona sin internet