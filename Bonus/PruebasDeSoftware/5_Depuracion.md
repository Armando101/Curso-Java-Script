## ¿Qué es la depuración?

Hacer testing o depuración son dos actividades diferentes. Mientras el testing sirven para encontrar defectos, la depuración nos permitirá entender por qué esta sucediendo este defecto y que actividades están implicadas en el. Ambas pueden ir de la mano y son muy importantes.

**Debugger**: Es una herramienta que nos ayuda a encontrar todos estos errores ya sea de sintaxis, advertencias de seguridad, etc. Nos permite ejecutar línea por línea, detener la ejecución temporalmente, visualizar el contenido de las variables, cambiar el valor del entorno de ejecución para poder ver el efecto de una corrección en el programa.

Beneficiados

__Programador__: Requiere cada vez que programa ir depurando lo que ejecuta y escriba para que cumpla con su objetivo
__Tester__: Le ayuda a reducir el tiempo de análisis que después puede ser asignado para el desarrollador
__Analista__: Puede ser para analisis de encontrar información de un historial sobre cómo se comporta un sistema.

**Objetivo**: Vamos a analizar cómo se comporta el sistema, cómo se transfieren los datos, cómo se procesa la información. Tenemos la capacidad de tener nuestro código en cualquier momento para conocer cómo funciona.

__Errores__: aunque hagas depuración hay una gran probabilidad de que en un fururo haya errores.

### Síntomas de errores
- Obtención de salida incorrecta
- Realización de operaciones fuera de lo normal
- No finalizamos el programa (ciclos infinitos).
- Caídas del programa.

### El depurador permite:
- Ejercutar línea por línea
- Detener la ejecución temporalmente
	- En una línea de código concreta
	- Bajo determinadas condiciones
- Visualizar el contenido de las variables
- Cambiar el valor del entorno de ejecución para poder ver el efecto de una corrección en el programa.

### Herramientas
- Mensajes de advertencia
- Estándares de compilación
- Verificación sintáctica y lógica

## Técnicas de depuración

Las técnicas de depuración deben ir cambiando de ser reactivas a ser preventivas. Debemos recordar que parte de los principios del testing moderno es tratar de ir corrigiendo nuestras técnicas, implementar mejores prácticas y hacer uso de mejores herramientas. El debugging debería ser la última técnica que utilizas.

### Técnicas de depuración:

- Debugging: Observar valores de variables, detener temporalmente la aplicación.
- Logs: Hacer un vaciado de cómo las variables van cambiando y es más fácil rastrear la información.
- Historial: Agiliza la forma de monitorear y observar los comportamientos de nuestro software. Comparando valores, agrupando información.
- Reportes: Observar anomalías, acelerar el tiempo de respuesta, prevenir ataques o fallas.

#### Desventajas de no usar logs
- Visibilidad nula de errores
- Metodología de trabajo no estandarizada.
- Accesos e información descentralizada
- Incremento del tiempo de respuesta

#### Ventajas de generar un Historial/reoprte
- Aplicar técnicas de Machine Learning
- Mejorar la gestión y control de información
- Detectar amenazas de red o virus
- Prevenir fugas de información, así como comportamientos inadecuados

### Pasos para depurar:

- Ir al módulo que falla
- Establecer breakpoints
	- En asignación de valores
	- Procesamiento de valores
	- Cambio de estados
- Diseñar una matrix de pruebas
- Establecer los datos de prueba
- Comenzar a depurar

## Pruebas de verificación

Las pruebas de verificación sirve para confirmar que un cambio se haya hecho o un defecto se haya corregido. Queremos verificar que lo que estamos buscando está en los requerimientos o documentación.

### Pruebas de verificación

- Tratan de reproducir el escenario fallido con los datos usados. Pero sería un error usar los mismo datos para después asumir que el error fue corregido.
- Se buscan nuevos escenarios donde se utilicen valores relativos. Como Otras plataformas, otros sistemas operativos, otros exploradores, otros dispositivos

### Pruebas de regresión

- La matrices de pruebas cuando se implementan otros dispositivos u otros exploradores nos ayuda a tenerlos en cuenta nuestros puntos de verificación para que no sufran un impacto.
- La matrix de prueba nos funciona para casos donde no solo vemos los defectos sino que todo lo que ya funciona siga funcionando.
- Nos ayuda a tener una claridad con los casos de prueba claves que pueden ser automatizados.

Documentación

- Comentarios en el código
- Documentación técnica
- Pruebas unitarias
- Pruebas específicas
- Matrices de pruebas
- Plan de pruebas
