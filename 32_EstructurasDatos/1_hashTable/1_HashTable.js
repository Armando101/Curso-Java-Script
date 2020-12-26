class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  /**
   * Hash function, genera devuelve un número aleatorio
   * @param {string} key llave para generar un número aleatorio 
   */
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * Insertamos un elemento en la hash table
   * @param {string} key clave para acceder a un valor
   * @param {number} value valor
   */
  set(key, value) {
    const address = this.hashMethod(key);
    // si la dirección no existe generamos un arreglo
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // agregamos el valor al arreglo de la dirección aleatoria
    this.data[address].push([key, value]);
    return this.data;
  }

  /**
   * Regresa un valor dado una clave
   * @param {string} key clave a buscar
   * @return {number} valor buscado, si no existe regresa un undefined
   */
  get(key) {
    const element = this.getElement(key);
    if (element) {
      const [currentBucket, item] = element;
      return currentBucket[item][1];
    }
  }

  /**
   *  Busca un elemento dato una key
   * @param {string} key clave a buscar 
   * @return {Array<Array, number>} devuelve un array con el bucket donde se encuentra el elemento a buscar y el índice
   */
  getElement(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return [currentBucket, i];
        }
      }
    }
    return undefined;
  }

  /**
   * Elimina un elemento de la hashtable
   * @param {string} key clave a buscar
   * @return {Array} elemento eliminado
   */
  delete(key) {
    const element = this.getElement(key);
    if (element) {
      const [currentBucket, item] = element;
      return currentBucket.splice(item, 1);
    }
    return undefined;
  }

  /**
   * Obtiene todas las claves de la hastable
   * @return {Array<string>} Claves disponibles en la hash table
   */
  getAllKeys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      if (element) {
        for (let j = 0; j < element.length; j++) {
          const subelement = element[j];
          if (subelement) {
            keys.push(subelement[0]);
          }
        }
      }
      
    }
    return keys;
  }
}

// Generamos una hash table con 50 espacios
const myHashTable = new HashTable(50);

// Agregamos dos valores
// Podemos ver que en este caso se presenta una colisión, esto es,
// los dos valores se guardan en la misma dirección de memoria
// no sobreescribimos el valor sino que al arreglo que ya estaba le añadimos otro elemento
myHashTable.set('Diego', 1990);
myHashTable.set('Mariana', 1998);

// En este caso no se presenta colisión ya que la dirección de memoria obtenida no se encontraba ocupada anteriormente
myHashTable.set('Alejandra', 2000);