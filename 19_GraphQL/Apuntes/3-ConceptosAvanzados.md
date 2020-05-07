## Alias y fragments

Dentro de GraphQL podemos correr más de una petición a la vez y nombrarlas de distinta manera para poder identificarlas, esto es posible gracias a los **Aliases** o simplemente Alias.

La sintaxis de un **Alias** es bastante simple:

```
nombreDelAlias: tipoDeDato(argumento: tipo) {
  datos
}
```

### Ejemplo

```
{
  AllCourses: getCourses {
    _id
    title
  }
  
  Course1: getCourse(id: "5eb108235977e1bc06a3054b") {
    _id
    title
    description
    people {
      name
      email
    }
  }
  
  Course2: getCourse(id: "5eb108235977e1bc06a3054c") {
    _id
    title
    description
  }
}
```

Además de los Alias, podemos agrupar campos para ser reutilizados en distintas peticiones gracias a los Fragments.

### Fragments
```
{
  AllCourses: getCourses {
    ...CourseFields
  }
  
  Course1: getCourse(id: "5eb108235977e1bc06a3054b") {
    ...CourseFields
    description
    people {
      name
      email
    }
  }
  
  Course2: getCourse(id: "5eb108235977e1bc06a3054c") {
    ...CourseFields
    topic
    teacher
  }
}

fragment CourseFields on Course {
  _id
  title
}
```

### Documentación
[Aliases](https://graphql.github.io/learn/queries/#aliases)

## Variables
Podemos utilizar variables dentro de las peticiones que hagamos a GraphQL simplemente definiéndolas con la siguiente sintaxis:

```
$nombre: tipo
```

### Ejemplo
Indicamos el nombre del nevo mutatios, las variables que recibirá y dentro el mutation
```
mutation AddPersonToCourse ($course: ID!, $person: ID!) {
  addPeople(courseID: $course, personID: $person) {
    _id
    title
  }
}
```

En la parte inferior izquierda abrimos la ventana de query y declaramos las variables
```
mutation AddPersonToCourse ($course: ID!, $person: ID!) {
  addPeople(courseID: $course, personID: $person) {
    _id
    title
  }
}
```

### Ejemplo 2
Vamos a utilizar querys  

```
query GetCourse2 ($course: ID!) {
  getCourse(id: $course) {
    _id
    title
    people {
      _id
      name
      email
    }
  }
}
```
En querys
```
{
  "course": "5eb108235977e1bc06a3054d"
}
```

### Documentación 
[Variables](https://graphql.github.io/learn/queries/#variables)

## Enums

Los **Enums** o enumeration types son tipos de datos escalares cuyos valores son configurables. Si definimos un tipo de dato como enum sus valores posibles solamente serán aquellos que se encuentren entre los definidos en el enum.

```
mutation CretateNewCourse($createInput: CourseInput!) {
  	createCourse(input: $createInput) {
    _id
    title
  }
}
```

En la parte de Query values
```
{
  "createInput": {
    "title": "Curso de Marketing Digital",
    "teacher": "Profesor1",
    "description": "Este es un curso de mkt digital",
    "topic": "Marketing",
    "level": "principiante"
  }
}
```

En el schema declaramos el **enum**  
```
"Enum para validar los tipos de nivel"
enum Level {
	principiante
	intermedio
	avanzado
}
```

### Documentación
[Enums](https://graphql.github.io/learn/schema/#enumeration-types)

## Interfaces - Tipo Monitor

Las interfaces son muy importantes y útiles cuando nos encontramos con tipos de datos similares. Una interfaz nos permite definir un tipo de dato padre que utilizando la palabra implements va a implementar los campos que tenga definidos dentro del tipo de dato que queramos.

### Ejemplo
Creamos un monitor con mutation

```
mutation createNewMonitor($monitorInput: PersonInput!) {
  createPerson(input: $monitorInput) {
    _id
    name
  }
}
```

En el campo de query variables
```
{
  "monitorInput": {
    "name": "Monitor 1",
    "email": "monitor@gmail.com",
    "phone": "1234567"
  }
}
```
  
Ahora podemos hacer las consultas
```
{
  getPersons {
    _id
    name
    email
    ... on Monitor {
      phone
    }
    
    ... on Student {
      avatar
    }
  }
}
```

## Directivas
Las directivas son una instrucción que permite agregar condicionales a nuestras peticiones. Podemos modificar de manera dinámica nuestra query simplemente añadiendo:

```
@include(if: Boolean) {
  datos
}
```

### Ejemplo 
```
query getPeopleData($monitor: Boolean!, $avatar: Boolean!) {
  getPersons {
    _id
    name
    ... on Monitor @include(if: $monitor) {
      phone
    }
    ... on Student @include(if: $avatar) {
      avatar
      email
    }
  }
}
```

Si $monitor es true me mostrará el phone de los monitores de lo contrario no
  
Query Variables
```
{
  "monitor": true,
  "avatar": true
}
```

### Deprecated
Esta directiva indica que un campo no existirá en un futuro, esto es útil para indicar a los consumidores de la API que por ahora puede que exista ese campo pero que se preparen porque en un futuró no existirá

```
topic: String       @deprecated
```



### Documentación
[Directivas](https://graphql.github.io/learn/queries/#directives)

## Unions

Unions permite agrupar varios custom types sin importar si tienen algo en común, su sintaxis es la siguiente:

```
union SearchResult = CustomType1 | CustomType2 | CustomType3
```

Al momento de realizar una query que retorna una union podemos identificar el tipo de dato solicitando el campo **\__typename**.

## Ejercicio
Para el ejercicio creamos in index desde Robo 3T  
Para hacer una búsqueda global en mongo necesitamos index
```
db.courses.createIndex({"$**": "text"})
db.students.createIndex({"$**": "text"})
```
  
Ahora podemos hacer consultas por una keyword
```
{
  searchItems(keyword: "backend") {
    __typename
    ... on Course {
      title
      description
    }
    ... on Monitor {
      name 
      phone
    }
    ... on Student {
      name
      email
    }
  }
}
```
### Documentación
[Unions](https://graphql.github.io/learn/schema/#union-types)