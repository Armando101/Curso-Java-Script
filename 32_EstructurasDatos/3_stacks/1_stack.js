class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * Toma el último elemento de la pila pero NO lo elimina
   */
  peek() {
    return this.top;
  }

  /**
   * Agrega un nodo a la pila
   * @param {number} value valor
   */
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  /**
   * Elimina un nodo
   * @returns {Node} nodo eliminado
   */
  pop() {
    if (this.length === 0) {
      console.error('Empty Stack')
      return;
    }
    const topNode = this.top;
    this.top = this.top.next;
    this.length--;
    return topNode; 
  }

}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);