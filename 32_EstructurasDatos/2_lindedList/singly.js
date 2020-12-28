// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySingleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.length) {
      this.append(value);
      return;
    }
    
    const newNode = new Node(value);
    let auxNode = this.getIndex(index);
    newNode.next = auxNode.next;
    auxNode.next = newNode;
    this.length++;
    return this;
  }

  unshift() {
    this.head = this.head.next;
    this.length--;
  }

  pop() {
    this.tail = this.getIndex(this.length);
    this.tail.next = null;
    this.length--;
  }

  remove(index) {
    if (index === 0) {
      this.unshift();
      return;
    }

    if (index === this.length) {
      this.pop();
      return;
    }

    let auxNode = this.getIndex(index);
    auxNode.next = auxNode.next.next;
    this.length--;
  }

  getIndex(index) {
    let auxNode = this.head;
    for (let i = 0; i < index-1; i++) {
      auxNode = auxNode.next;      
    }
    return auxNode;
  }

}

let mySingleLinkedList = new MySingleLinkedList(1);
console.log(mySingleLinkedList);

mySingleLinkedList.append(2);
mySingleLinkedList.append(3);
mySingleLinkedList.append(4);
mySingleLinkedList.append(5);
mySingleLinkedList.append(6);