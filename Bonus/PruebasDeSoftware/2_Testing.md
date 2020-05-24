# Testing
## Presupuesto, Recursos, Tiempo y Actividades Clave

Los elementos que tomamos en cuenta para un proyecto de software tienen que ver con el presupuesto, recursos y tiempo.

Si un proyecto no tienen el dinero suficiente para tener el equipo necesario de personas e infraestructura, no hay recursos humanos o si una mala organización en el tiempo puede provocar retrasos y el cliente busca a alguien más.

### Actividades clave de pruebas
El ciclo de vida del software tiene un momento para **definir las necesidades del cliente**, hacer un **análisis** de requerimientos tanto funcionales como de **diseño**, **codificación**, **pruebas**, **validación** y finalmente **mantenimiento y evolución**.  

Se puede hacer testing en cada una de las etapas del ciclo de vida del software.

1. **Análisis**: Revisar la documentación donde están las necesidades y requiermientos, esta parte es sólo texto pero podemos hacer pruebas. Normalmente son requerimientos generales, ej. El usuario puede iniciar sesión, la pregunta sería cuántos usuarios pueden iniciar sesión?, qué debería hacer el software si tienen un inicio de sesión fallida?, qué sucede cuando no inicia sesión?. Qué mensaje debe lanzar el producto para dar feedback al usuario?

2. **Diseño**. Criterios visuales que hagan match con los requerimientos. Ej. Cuántos caracteres debe tener el nombre del usuario, qué pasa si pone el nombre correcto, qué sucede si el nombre es incorrecto. Qué mensaje le vamos a dar al usuario (Tú nombre puede/no puede tener carateres especiales números, etc.). 

3. **Código**. Hacer prubas dependiendo la arquitectura.
- Módulos
- Base de datos: agregar, eliminar, actualizar datos.
- Funciones

4. **Pruebas**. Hacer pruebas desde como el usuario interactúa, como se hace la conexión al Backend. Las pruebas de aceptación es donde está el usuario final. Lo que debemos de hacer es probar en cada fase y no esperar hasta que el producto esté terminado para hacer las pruebas.

## Estrategia de pruebas

Las estrategias de prueba son aquellas que nos permiten conocer por donde comenzar. Por donde vamos a hacer las pruebas, planearlas, identificarlas. Para saber por donde comenzar podemos hacernos dos preguntas.

- ¿Qué problemas tenemos actualmente?  

- ¿Qué problemas debemos evitar?

## Testing en desarrollo de software

**Testing**: Es la exploración de una idea, aprender a conocer como sucede el flujo, se generan datos, se llenan formularios. Esto y la exploración de pruebas nunca terminan, siempre hay nuevas formas de conocer como el usuario esta usando el software

**Checking**: Es cuando sabes qué esta pasando y te verificas que siga pasando. Como verificar una maleta antes de viajar para asegurarnos que guardamos todo.

- Solo se ejecutan si sucede algo
- Se ejecutan cada que... libero nuevo código o software.
- Se ejecutan de manera programada.

### Errores comunes durante la ejecución
- Pruebas duplicadas
- Pruebas similares
- Pruebas sin valor agregado: no están asociadas al negocio.
- Pruebas caducadas: las pruebas ya no son viables debido al avance tecnológico.

La automatización de pruebas consiste en el uso de **software especial** para controlar la ejecución de pruebas y la comparación entre los resultados obtenidos y los resultados esperados. Sin embargo, se trata de un **checking repetitivo y automatizado**

### Desventajas del checking mal empleado
- Pobre cobertura de pruebas: cada que incluimos nuevos escenarios ampliar las pruebas, de lo contrario tenemos pruebas repetitivas.
- Falta de actualización: Confome se acumulan más pruebas se necesita dar mantenimiento a las pruebas.
- Mal manejo de versiones.

### Ventajas del checking bien empleado
- Correr pruebas en paralelo o en múltiples plataformas
- Reducción de error humano.
- Probar grandes cantidades de datos.

Por otro lado, cuando ya queremos hablar de **integración continua y liberación continua**, entonces la **automatización** es la solución definitiva para la eficencia del equipo de desarrollo digital y equipos DevOps.

## Testing ágil

Involucra a todos, no solo en al tester, todos en el equipo son tester. La persona con este rol se asegura de la mayor cobertura de pruebas tomando en cuenta todas las necesidades que cada uno de los miembros del equipo también esta intentando hacer que funcione. El tester tiene que definir si se esta cumpliendo con los requerimientos funciones y los del equipo.

Estrategias Ágiles:

- El testing es de "todo el equipo"
- El testing puede ser independiente
- Integración continua
- Testing guiado por pruebas (Test Driven Development)
- Desarrollo guiado por comportamiento (Behaviour Driven Development)
- Desarrollo guiado por las pruebas de aceptación (Acceptance Test Driven Development)

## Niveles de pruebas

Vamos a ver diferentes estrategias de cómo podemos ir probando elementos por capas. Componentes, estructuras, etc.

**Prueba de Componentes**: Componentes son aquellas cosas pequeñas que sueles ver en un video como el botón de pausa, volumen, adelantar, retroceder. Cada una de esas acciones son un componente.

**Pruebas de integración**: Una aplicación tiene una serie de componentes que trabajando juntos forman un pequeño sistemas, pero cuando tienes varios de estos sistemas necesitas integrarlos entre ellos.

**Prueba de sistema**: Esta parte incluye que estás tomando en cuenta el contexto, no es lo mismo tener las mismas pruebas para iOS, Android y Web.

**Pruebas de aceptación**: Si ya probamos que nuestro elemento o acción funcionan, estás pruebas nos aseguran con o sin el cliente que tiene cubierta todas las necesidades requeridas en el software. Es la última verificación.

## Tipos de pruebas

Necesitamos tener otra clasificación adicional. En los niveles sabemos la profundidad de las pruebas, pero en los tipos independientemente de su profundidad son las técnicas que vamos a usar para encontrar los defectos.

**Pruebas funcionales**: Cómo funciona un sistema, qué debe estar haciendo, cómo está interactuando el usuario con él. Ej. el usuario debe poder ingresar y recibir datos, clickear botones, etc.

**Pruebas no-funcionales**: El usuario puede estar experimentando otro tipo de cosas que aún funcionando puede tener la sensación de lentitud, falta de legibilidad o claridad. Esas características de usabilidad están asociadas a estas pruebas. Características de usabilidad y accesibilidad, dar feedback al usuario para indicarle la acción que realizó.

**Pruebas estructurales**: Tienen que ver con la tecnología y el stack usado para construir nuestro producto. Nos tenemos que asegurarnos que nuestra base de datos o servidor funcionen de la manera correcta. Son conocidas como pruebas de caja blanca.

**Prueba de manejo de cambios**: Es probar nuevamente un componente ya probado para verificar que no ha sido impactado por actualizaciones.

## Pruebas estáticas y dinámicas

Ya vimos los cuatro diferentes tipos de pruebas, pero estas también se separan en dos formas diferentes de trabajarlas.

**Pruebas estáticas**: Muchas veces no son consideradas en los proyectos porque significa revisar código, documentación, verificar información documentada de la forma correcta.

**Pruebas dinámicas**: Se enfocan en comportamientos externos visibles durante la ejecución del software.

### ¿Qué son los elementos?
- Contratos, planes y calendrio del proyecto, así como su presupuesto.
- El análisis de requeirimetnos
- Especificaciones o reglas de negocio
	- Técnicos
	- Seguridad
- Las definiciones de:
	- Historia del usuario
	- Criterios de Aceptación
	- Mockups
- El diseño de la arquitectura
- Las pruebas (Testware), puntos de verificación CI
- Guías de usuario
- Evaluación/revisión del código

### Beneficios
- Detectar y corregir defectos de manera más eficiente
- Identificar y priorizar la ejecución de pruebas en etapas posteriores.
- Prevenir defectos 
	- Que no son facilmente detectables durante las pruebas el dinámicas
	- Durante la etapa de análisis y diseño
- Cubrir aspectos como:
	- Inconsistencas, ambiguedades, contradicciones, definiciones inexactas, requerimentos reduntantes.
- Reducir el retrabajo e incrementar la productividad
- Reducir el consto y el tiempo
- Mejorando la comunicación entre todos los miembros del equipo.

## Definición y diseño de pruebas

#### ¿Qué hace un tester?
1. Encontrar problemas
2. Documentar problemas
3. Comunicar problemas

Esto es algo básico para cada tester. Hay varias cosas necesarias que debemos comprender y estar seguros de para qué lo hacemos.

Tu obligación y por lo que vas a brillar es porque sabes Encontrar Problemas, Documentarlos y Comunicarlos. Es crucial documentar, diseñar y nuestros casos de prueba contengan la información necesaria para que se entienda el trabajo.

