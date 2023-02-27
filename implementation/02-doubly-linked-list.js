// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: 0(1);
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);
        
        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        
        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        this.length++;
        const node = new DoublyLinkedNode(val);
        if(this.length === 1){
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        // Write your hypothesis on the time complexity of this method here
         // Time Complexity: 0(1);
    }

    removeFromHead() {
        // Remove node at head
        if(this.length === 0) return;
        this.length--;
        const remove = this.head.value;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
            return remove;
        }
        this.head = this.head.next;
        this.head.prev = null;
        return remove;
        // Write your hypothesis on the time complexity of this method here
         // Time Complexity: 0(1);
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.length) return;
        this.length--;
        const remove = this.tail.value;
        if(!this.length){
            this.head = null;
            this.tail = null;
            return remove;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        return remove;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: 0(1);
    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : undefined;  // Time Complexity: 0(1);
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        return this.tail ? this.tail.value : undefined;  // Time Complexity: 0(1);
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
