class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);
    if(this.head === null) this.tail = newNode;
    else this.head.prev = newNode;

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  addToTail(val) {
    // Your code here
    this.length++;
    if(!this.tail){
      this.tail = new DoublyLinkedListNode(val);
      this.head = this.tail;
      return;
    }

    this.tail.next = new DoublyLinkedListNode(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
