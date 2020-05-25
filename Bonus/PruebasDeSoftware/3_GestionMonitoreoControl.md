## Caja Blanca, Gris y Negra

Cuando no estamos refiriendo a una caja es la manera de observar el contenido de software.

**Negra**: No podemos observar cómo fue construida, no vemos el código, no sabemos su arquitectura, no tenemos nociones más que la interfaz que estamos interactuando.

- Partición de equivalencia
- Valores límite
- Tabla de decisiones: Valroes discretos fijos, true, false.
- Transición de estados: Cómo se comporta el componente.
- Casos de usos: Probar que el usuario puede llenar el formulario y envíarlo.

**Blanca**: Es como una caja de cristal, puedo ver todo lo que hay adentro e incluso puedo ser parte del equipo que desarrolla el software.

- Cobertura de declaración: es todo aquello que está dentro del código y se asume lo que tienen que hacer.
- Cobertura de decisiones: dependiendo el tipo de software y objetivos, cada línea de código debe ser ejecutada al menos una vez. Para liberar el código se require una cobertura de cierto porcentaje.

**Gris**: Pueden ser la integraciones, cómo fluye el código y puedo ver como se transmiten los datos a través de las redes.

- Casos de negocios: el usuario agregar artículos artítculo, el backend los procesa y le manda al usuario que se ha agregado correctamente.
- Pruebas End-to-End: Un dato de entrada se visualiza en otro sitio.
- Pruebas de integración: Respuestas al flujo de datos en distintos servicios.


## Gestión, monitoreo y control: Monitoreo y Seguimiento

Aunque parezca obvio que es necesario gestionar nuestro trabajo y darle seguimiento a las pruebas y ejecución, hay estudios donde las empresas no pueden hacer esto exitosamente.

Gestión de Pruebas:

**Planeación**: Definir los objetivos de las pruebas es muy importante, al no tener una estrategia clara termina causando una pobre cobertura de pruebas. Los elementos a considerar para una buena planeación son la estimación, recursos, el alcance y objetivo.

**Monitoreo y Control**: Durante el monitoreo lo que estamos buscando son esas métricas que nos digan si estamos llevando avances o tenemos retrasos. Son nuestras alertas cuando nuestro plan no se esta ejecutando.

**Análisis**: Incluye decidir cuáles son esas prioridades que nos ayudará a definir qué debemos probar.

**Diseño**: Normalmente cuándo estas iniciando las pruebas es necesario crear un mapa de ideas. Después de esto, puedes realizar el diseño a detalle de qué va a incluir cada caso de uso. Casos de alto nivel, diseñar y priorizar pruebas, identificar el entorno de pruebas, hacer una trazabilidad entre pruebas y sus condiciones.

**Implementación**: También nos aseguramos de contar con la estructura necesaria para realizar las pruebas, con un ambiente, datos y dónde documentar o realizar las pruebas.

**Ejecución**: En esta etapa los suites de pruebas se ejecutan de acuerdo al programa o el plan diseñado con anterioridad. Se suelen agrupar los casos de pruebas para que no estén desorganizado y podemos hacerles un buen seguimiento.

**Finalización**: Cuando queremos cerrar el ciclo de las pruebas, necesitamos saber qué porcentaje se cubrió, ejecutó, cuántos defectos se derivaron, aprender lecciones sobre el proceso.

## Roles y Responsabilidades 

Tenemos principalmente 4 roles:
1. Especialista en pruebas manuales: Especialista en entender cuál es el caso de uso que se van a llevar a cabo en cada área. Organiza y asigna trabajo para sí mismo, dependiendo las prioridades del negocio, el riesgo o imapcto.
2. Especialista en pruebas técnicas: se encarga de estar actualizado en las herramientas que permitan acelerar y mejorar el trabajo.
3. Líder del equipo de pruebas: gestiona al equipo, se vuelve un facilitador para lo que se requiera.
4. Ingeniero de calidad: Se encarga de la cultura, establece las políticas, ve que se cumplan. Que todos los equipos se encuentren involucrados.

## Roles y Responsabilidades en acción 

Independientemente del rol, un tester participa de todas las etapas del proceso de desarrollo de software, colaborando para asegurar la máxima calidad del producto. Su perfil conjuga un conjunto de habilidades con el conocimiento del negocio, de la aplicación bajo prueba y de cómo planificar, diseñar, ejecutar y administrar las pruebas.

"Un tester investiga un producto de software con el objetivo de obtener información acerca de su calidad y del valor que representa para quienes lo utilizan"

Cuando el esfuerzo en la calidad se enfoca y se distribuye en roles y responsabilidades podemos encontrar que la mayoría de las empresas manejan los siguientes roles:

__El tester manual__, se enfoca en la estrategia, definición, ejecución y cobertura de pruebas para cumplir los requerimientos, echando mano de cualquier técnica para obtener información suficiente y así cumplir con las asignaciones correspondientes.

__El tester técnico__, trabaja muy de cerca con el tester manual, mientras que el tester manual define las pruebas, el tester técnico acelera la capacidad de ejecución de las pruebas. Esto lo hace implementando herramientas que permitan la automatización de pruebas, o la correcta selección de datos de pruebas, o el monitoreo de la ejecución de las pruebas.

__El líder de pruebas__, generalmente dentro de sus responsabilidad es volverse un facilitador de servicios, información y herramientas para el equipo de pruebas, para poder estimar presupuestos, recursos y tiempos respecto al plan de desarrollo de software.

__El Ingeniero de calidad__, ya no solamente está al pendiente del producto y los procesos, comienza a involucrarse más con el negocio, ayudando tanto a testers como cualquier otro miembro del equipo a llevar cabo pruebas que reduzcan, en todas las etapas del ciclo de vida del software, el error humano.

## Habilidades de un tester
__Capacidad de abstracción__ y modelado para entender y simular el comportamiento del sistema y simular el comportamiento del sistema bajo prueba.
__Comunicación__ para interactuar con todos los miembros del equipo.
__Pensamiento lateral__ para generar ideas e imaginar los problemas que podrían existir.
__Pensamiento crítico__ para observar ideas e imaginar los problemas que podrían existir.
__Pragmatismo__ ser lo suficientemente abierto para poner en práctica las ideas de los demás o propias, adecar las técnicas y el esfuerzo al alcance del proyecto.
__Trabaja en equipo__ sabe interctuar para lograr el mayor beneficio entre todos los involucrados.