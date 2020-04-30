# Hapi

## ¿Qué es Hapi?
Hapi es uno de los frameworks más usados en el ecosistema de NodeJS.  
Está diseñado pensando en aplicativos modularizados de grandes dimensiones.  

Contempla la separación de la configuración de la lógica del negocio y utiliza su propia forma de hacer las cosas.  

## Principales usos  
- Aplicativos Web
- APIs REST
- APIs en GraphQL
- Proxies HTTP
- Integrador de múltiples Backends, entre otros.

### Prerrequisitos

- Conocimientos básicos de NodeJS
- Conocimientos generales de arquitectura MVC
- Opcionalmente, conocimientos básicos de: Express, Asincronía en Node con async / await y Firebase


## Breve historia y estado actual

Hapi fue creado por Eran Hammer, el mismo desarrollador y creador de la especificación OAuth, quien siendo líder del equipo de Mobile en Walmart, se vió en la necesidad de buscar una solución a los problemas relacionados con el tráfico del sitio web durante los días cercanos al BlackFriday.  

Junto a su equipo crea Hapi, como un middleware de Express, ya que éste no les ofrecía solución a los problemas que estaban enfrentando. Luego de probar diferentes combinaciones de soluciones, decidieron crear todo el framework desde cero sobre la base del principio: *mejor configuración que código*, e inspirados en Express y Director. Así que crearon un concepto nuevo con el que lograron soluciones más eficientes para su problema.

Recientemente Hapi (en su versión más reciente 17.x) fue rediseñado para aprovechar toda la funcionalidad y potencialidad que ofrece el trabajo asincrónico con Async / Wait de NodeJS.

## Instalación
Necesitaremos librerias adicionales para un mejor desarrollo
```
npm install nodemon
```
```
npm install standard
```

Para instalar el framewor Hapi lo hacemos así

```
npm install @hapi/hapi
```