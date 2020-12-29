class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Toma el primer elemeto
   * @returns {Node} primer elemento
   */
  peek() {
    return this.first;
  }

  /**
   * Agrega un nodo a la queue
   * @param {number} value valor a ingresar en el nuevo nodo
   */
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  /**
   * Elimina un nodo de la queue
   */
  dequeue() {
    if (this.length === 0) {
      return;
    }
    this.first = this.first.next;
    this.length--;
  }

}

const myQueue = new Queue();