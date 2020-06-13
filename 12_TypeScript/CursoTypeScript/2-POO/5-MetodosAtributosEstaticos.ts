/* 
	Atributos estáticos
	 - Los declaramos con la palabra reservada static
	 - Son atributos que le pertenecen a la clase, no a un objeto
	 - Sólo se necesita una copia de dicha variable
	 - Accedemos al atributo asi: ClassName.property
	 - Podemos acceder a ellos sin instanciar un objeto
*/

class Requestor {
	static url: string = 'https://getLearning:'

	getCourses() {
		console.log(`${Requestor.url}/courses`);
	}

	static getArticles() {
		console.log(`${Requestor.url}/articles`);
	}
}

/*
	Los metodos estáticos se declaran con la palabra reservada static
	- Accedemos a ellos con el nombre de la clase y el nombre del método
	- No es necesario instanciar un objeto para usarloss
*/

Requestor.getArticles();