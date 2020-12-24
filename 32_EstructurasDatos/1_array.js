// const array = ['Armando', 'Diego', 'Karen', 'Oscar'];

class MyArray {
  constructor(data = {}) {
    this.length = 0;
    this.data = data;
  }

  get(index) {
    return this.data[index];
  }

  set(index, item) {
    this.data[index] = item;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.get(this.length-1);
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  shift() {
    return this.delete(0);
  }

  delete(index) {
    const item = this.get(index);
    this.shiftIndex(index);
    return item;
  }
  
  shiftIndex(index) {
    for (let i = index; i < this.length -1; i++) {
      this.set(i, this.get(i+1));
    }
    delete this.data[this.length-1];
    this.length--;
  }

}

const myArray = new MyArray();

myArray.push('Armando');
myArray.push('Diego');
myArray.push('Karen');
myArray.push('Oscar');
