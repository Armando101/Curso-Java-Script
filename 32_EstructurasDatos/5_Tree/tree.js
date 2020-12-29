class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Crea un nuevo nodo y lo inserta en el árbol
   * @param {number} value valor a insertar
   */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  /**
   * Busca un valor dentro del árbol
   * @param {number} value valor a buscar
   * @returns {Node} nodo con el valor a buscar
   */
  search(value) {
    if (this.root === null) {
      console.warn('No hay nodos en el árbol');
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode === null) {
        console.warn('No se encontró el valor');
        return;
      }
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;        
      } else {
        currentNode = currentNode.left;
      }
    }
  }
}

const myTree = new BinarySearchTree();

myTree.insert(10);
myTree.insert(4);
myTree.insert(20);
myTree.insert(3);
myTree.insert(5);
myTree.insert(40);
myTree.insert(150);