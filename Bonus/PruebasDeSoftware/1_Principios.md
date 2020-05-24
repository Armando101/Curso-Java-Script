# ¿Qué son las pruebas y por qué deberíamos hacerlas?

¿Cuántas veces hemos sido usuarios de alguna app móvil y falla? ¿Cuántas veces hemos sido parte del desarrollo de un producto y el retrabajo se desborda por todas las fallas o defectos que contiene?.

Las pruebas son una manera de explorar, experimentar, entenderlo, entre menos entiendas el productos que estas desarrollando más errores tendrá. Las puedes hacer por cuestión de costo, prestigio o cuestiones legales.

Tres aspectos a considerar:

- Tenemos un problema o el resultado no es el esperado
- Nuestros costos se están volviendo muy alto.
- Implicaciones legales o de estándares tecnológicos.

### ¿Pasando todas las pruebas tendré un software sin errore?
La respuesta es no, siempre existe la posibilidad de que exista un neuvo fallo, puedes tener un producto estable pero si el usuario usa un nuevo hardaware o sale un nuevo software que depende de tu producto, en este caso lo que queda es actualizarte y tomar medidas.

Si tú no sabes estimar bien, si no conces bien tu producto, si no conoces a tus clientes, por lo tanto aunque tengas las mejores prácticas de desarrollo de software siempre se multiplicarán tus problemas.

## Proceso de pruebas del software y los estándares internacionales

Para el proceso de pruebas es necesario contar con al menos 3 elementos que lograrán cumplir nuestros objetivos:

- Metodología: Es donde estableces el criterio o estrategia de cómo se llevaran acabo las pruebas. ¿Quiénes son los responsables?, ¿Cómo se debe entregar el material?, etc.
- Recursos: Si quieres realizar pruebas y no estás preparado, con el tiempo esas carencias se pueden visualizar como defectos.
- Herramientas: Nos ayudarán a optimizar nuestro trabajo, nos ayudarán a detectar los problemas, comunicarlos y solucionarlos.

### Pruebas en el cilo de vida del software
- Requisitos
- Diseño
- Código
- Pruebas
- Explotación

En un estudio que hizo IBM indica que el 64% de los errores se producen durante el análisis y diseño. Debería haber una metodología para llevar a cabo el producto.

### ¿Qué vamos a revisar en las pruebas?
- Definir la calidad del producto: Si estas creando el software correctamente.
- Calidad del proceso: Si el cliente no te especifica lo que quieres no vas a poder crear un producto que cubra sus necesidades.

### Calidad de software
Involucra la calidad del producto y del proceso
- Calidad del producto: Lo que la gente produce. Requerimentos, diseño, código, sistema.
- Calidad del proceso: Cómo lo hace la gente. Estándares, procesdimientos, procesos del proyecto.

### Cerfificaciones, estándares y metodologías para:
- Individuos
- Procesos
- Empresas
- Servicios/productos = software/hardware
- Tipo de industrias

## Ciclo de vida del software 
A lo largo del ciclo de vida del software se realizan distintas pruebas para garantizar que este cumpla con los requerimientos para los que fue diseñado y de la misma forma se encuentren procesos de mejora y optimización a medida que se desarrolla el software.

- Es necesario hacer pruebas en todas las fases del desarrollo de software ya que un error encontrado en una etapa tardía puede generar costos muy elevados.

- Errores detectados lo antes posible reducen los costos y son mucho más fáciles de corregir.

- El ciclo de vida permite que los errores se detecten lo antes posible y por lo tanto, permite a los desarrolladores concentrarse en la calidad del software, en los plazos de implementación y en los costos asociados.

El ciclo de vida básico de un software consta de los siguientes procedimientos:

1. Definición de objetivos
En esta fase se define el alcance general del software y su papel dentro de una estrategia global o dentro del ecosistema que va a funcionar.

2. Análisis de los requisitos y su viabilidad
Se trata de recopilar la mayor cantidad de información posible para evaluar la viabilidad del producto, encontrar posibles restricciones y analizar todos los requisitos del cliente.

3. Diseño
Alto nivel: Se trata de realizar un diseño básico que valide la arquitectura de la aplicación.
Bajo nivel: Es una definición detallada de la estructura de la aplicación basada en el diseño general.

4. Programación
Es la implementación de un lenguaje de programación para crear las funciones definidas durante la etapa de diseño.

5. Pruebas de verificación
Aunque en todas las fases anteriores se hacen pruebas en esta fase se cubren: pruebas de componentes, integrales y de sistema.

6. Prueba beta (o validación)
Se hace para garantizar que el software cumple con las especificaciones originales o también se hacen las pruebas de aceptación.

7. Implementación
Se realiza una prueba del sistema implementado para encontrar posibles fallas en la Implementación.

8. Mantenimiento
Se hace para todos los procedimientos correctivos (mantenimiento correctivo) y a las actualizaciones secundarias del software (mantenimiento continuo), junto con la actualización de las pruebas.

Si hacemos las pruebas durante cada fase del ciclo de vida del software tendremos al final del ciclo un producto validado y robusto de acuerdo a las necesidades del cliente

## Proceso de pruebas del software: Calidad y Defectos
Todo lo anterior nos hace preguntarnos: ¿Qué es la calidad?

La **calidad** es una percepción entre lo deseado, analizado y lo que vamos a entregar. La calidad la define el cliente, si esa persona esta satisfecha con lo entregado hasta ahí llega la calidad.

*El grado con el que un sistema, componente o proceso cumple con los requisistos especificados y las necesidades o expectativas del cliente o usuario*

Lo primero que hay que tener claro es la necesidad del cliente y qué es lo que espera, si no tenemos claro esto, vamos a tener problemas en cada fase del desarrollo.

- Verificación: Es ir en cada etapa revisando que se cumpla lo propuesto por el cliente.
- Validación: Antes de entregar al cliente, validamos que efectivamente el conjunto de requerimientos esta siendo cumplido con lo entregado.
- Anomalía: Cualquier insatisfactoria condición. Situaciones únicas que no son reproducibles.
- Defecto: No desempeña funciones. Un problema que se puede reproducir una y otra vez.
- Fallo: Incapacidad dentro de márgenes. Problemas que se dan dentro de un contexto específico.
- Error: Acción humana incorrecta

*El error humano cometido inyecta un defecto en el software que, ocasionalmente, se observa como una nomalía a causa de un comportamiento incorrecto, no acorde a lo especificado, que finalmente provica el fallo del sistema software*

Ya entendimos que es necesario definir un proceso que asegure un buen desarrollo del producto, que los estándares o herramientas implementadas deben ayudar a cubrir las métricas definidas para entonces evaluar si el producto tiene el porcentaje o grado de calidad esperado.

## Principios del testing moderno

- Nuestra prioridad es mejorar el negocio: El producto que se va a entregar al cliente permitirá hacer funcionar el negocio. Si en algún momento no quieres hacerlo, estás poniendo en riesgo ese negocio porque si el producto no se vende o no es aceptado la empresa puede cerrar o puedes perder el trabajo.
- Nosotros aceleramos el equipo y usamos modelos como Lean Thinking y Teoría de las Restricciones para ayudar a identificar, priorizar y mitigar cuellos de botella en el sistema: Cuando queremos hacer algo, lo queremos hacer perfecto y eso puede ser demasiado. Deberías construir en base a procesos cortos para poder encontrar los defectos de una manera más rápida.
- Nosotros somos la fuerza para la mejora continua, ayudando al equipo a adaptarse y optimizar para tener éxito, en lugar de proporcionar una red de seguridad para detectar fallas: El cliente puede entender que el producto se va a liberar por fases, es importante que nosotros enfoquemos nuestras pruebas en cada una de esas fases. No tiene que ser todo al inicio y al final, debe haber una distribución que nos permita manejar el riesgo del software
- Nos preocupamos profundamente acerca de la cultura de calidad en nuestro equipo, y asesoramos, lideramos y nutrimos el equipo para llevarlos a una cultura de calidad más madura: Al inicio los testers eran personas desarrollando software y un día con tantos defectos y trabajo, separaron los roles para que así hubiese una persona dedicada a realizar las pruebas. El tester puede hacer recomendaciones de herramientas, mejorar el proceso o volverse un coach.
- Nosotros creemos que el cliente es el único capaz de juzgar y evaluar la calidad de nuestro producto: Si el cliente esta satisfecho con lo entregado y cumple las expectativas entonces has alcanzado la calidad deseada.
- Nosotros usamos datos de manera extensa y profunda para entender los casos de uso del cliente y entonces cerrar huecos entre hipótesis del producto e impacto del negocio.
- Expandimos las habilidades de testing y el conocimiento en todo el equipo; entendemos que esto reduce o elimina la necesidad de una especialista dedicado al testing.

El tester debe dominar varias areas necesita entender y tener toda la visión del producto y negocio. Saber sobre herramientas que optimicen el trabajo.

Para llevar estos 7 principios a cabo debermos tener un coach o una persona que lleve toda la política de calidad, pero todo el equipo es responsable, si cualquier miembro del equipo detecta un error es su responsabilidad reportarlo.

## Especialidades del testing

Hay muchas especialidades a la hora de hablar de testing y cada una de ellas tiene diferentes funciones y perspectivas que se incluyen en diferentes fases del proceso

**Manual tester**: Nos ayuda a definir los casos de pruebas, establecer estrategias. También ejecuta, pero lleva lo necesario para que todos sepan qué hacer.

- Pensamiento lateral, piensa fuera de la caja con una nueva perspectiva, agrega nuevos casos de usos y entiende muy bien al usuario.

**Automation tester**: Se encarga de agilizar, acelerar el trabajo y actividades que nos quitan la oportunidad de encontrar más casos de usos.

- Conoce de programación, no solo de forma básica, debe conocer como crear diseños de frameworks y soluciones. El código crece y las pruebas también, darle ese mantenimiento a las pruebas es un problema común.

**Security tester**: Encargado para el área de seguridad. Debe ser alguien que aporte valor desde la perspectiva de la seguridad.

- Protocolos, estándares, legalizaciones dependiendo de cada país y marca. Esta enfocado en prever ataques, virus, problemas de seguridad, acceso no autorizado. Profundizar en las técnicas y prácticas de seguridad.

**Data science tester**: Con la manera en que crecen los datos en un proyecto, se necesita a alguien que los analice, agrupe y limpie estos datos.

- Análisis y Limpieza de datos, omite tener un set de pruebas amplio donde la variedad va a permitir detectar defectos inesperados. Esto puede ser clave para que los resultados no sean falsos positivos

**SDET**: Es la combinacion de un desarrollador que ya sabe hacer pruebas. Con la diferencia de automatiza y hace uso de herramientas que organizan la operación de la entrega de las pruebas. Esta persona se asegura de que las pruebas se ejecuten antes de liberar el código.

- El programador ahora sabe hacer pruebas y conoce de herramientas que le permite entregarlas de una manera automatizada.

**DevOps**: Conoce todo lo anterior y domina el conocimiento de automatizar el proceso, se asegura de una entrega continua.

- Una automatización de la operación, Entrega Continua. Donde se entregan de forma más rápida las nuevas versiones.

**QA Engineer**: Quality Assurance. Esta enfocado en el producto y en el proceso.

- Procesos de Calidad

**QE**: Quality Engineer. Es como un coach, acompaña en las politicas de calidad en la empresa o equipo.

- Soluciones de estrategias de calidad.
