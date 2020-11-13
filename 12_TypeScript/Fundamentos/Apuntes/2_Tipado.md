# Tipado en TypeScript

Dentro del lenguaje podemos declarara variables de manera __explícita__ e __Inferido__
## Explícito
Define una sintaxis para la creación de variables con tipo de dato

```ts
nombreVariable: tipo
```

## Inferido
Typescript tiene la habilidad de "deducir" el tipo en función de un valor
```ts
nombreVariable: = valor
```

## Tipos de dato primitivos
- Number 
- Boolean
- String
- Null
- Undefined
- Object
- Array
- Tuple
- Enum
- Any
- Void
- Never

## Tipo Number
- Valores numéricos
- Valores hexadecimales
- Valores binarios
- Valores octales

## Tipo Boolean
- El tipo de dato más simple en TypeScript
- Dos únicos valores: true y false

## Tipo String
- El tipado de dato para trabajar con datos textuales o cadenas
- Así como en JavaScript, se pueden usar comillas dobles y simples

### Template string
- Permite definir múltiples líneas de texto
- Pueden contener expresiones o variables embebidas
- Se debe usar el caracter backtick/backquote y para expresiones ${}


## Any
- Usado para capturar valores dinámicos
- Los valores pueden cambiar de tipo en el tiempo
    - API's externas
    - Librerías de terceros

## Void
- Void es lo opuesto a any, representa la ausencia de valor
- Comúnmente se usa como tipo de retorno en funciones

## Never
- Representa el tipo de valor que nunca ocurre
- Funciones que lanza excepciones
- Funciones que nunca retornan un valor

## Null y undefined
- En TypeScript, ambos _valores_ tienen sus respectivos tipos
    - null
    - undefined

## Object
- object es el tipo de dato que representa un valor no primitivo
- Es el tipo para variable que no sea number, string, boolean, null, undefined, etc.

## Array
- Al igual que JavaScript, TypeScript permite definir un arreglo para contener un conjunto de valores
- Usa dos notaciones [] y Array <tipo>

## Tuplas
- Las tuplas permiten expresar un arreglo con un número fijo de elementos
- Los tipos de datos son conocidos

## Enum
- Los enumerados permite definir un conjunto de constantes con nombre
- Tiene la ventaja de adaptarse al contexto de la aplicación

## Union de tipos
- En typeScript se puede definir una variable con múltiples tipos de datos
- Se usa el símbolo de pipe (|) entre los tipos 

## Alias de Tipos
- TypeScript permite crear un alias como nuevo nombre para un tipo de dato
- El alias se puede aplicar también a un conjunto o combinación de tipos
- Se usa la palabra reservada type

## Tipos literales
- Una variable con un tipo literal puede contener únicamente una cadena del conjunto
- Se usan cadenas como "tipos", combinados con el símbolo de pipe entre ellos

## Aserciones de Tipo
- Cuando el programador puede conocer más que TS sobre el valor de una variable
- Es un mensaje al compilador: _Confía en mí, sé lo que hago_
- Se parece al casting de tipos en otros lenguajes de programación
- Usa dos sintaxis <Angle Bracket> y (Variable as tipo)

## Funciones en TS
- Los parámetros en las funciones son tipados
- Se pueden definir parámetreos opcionales
- El tipo de retorno puede ser un tipo básico, enum, alias, tipo ilteral o una combinación de ellos
