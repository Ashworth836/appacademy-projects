// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        const node = new SinglyLinkedNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: 0(n)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: 0(n)
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) return;
        this.length++;
        const remove = this.head;
        this.head = this.head.next;
        return remove;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: 0(n)
    }

    removeFromTail() {
        // Remove node at tail
        if(!this.head) return;
        this.length--;
        let remove = this.head;
        if(this.length === 0){
            this.head = null;
            return remove;
        }

        let current = this.head;
        while(current.next.next){
            current = current.next;
        }

        remove = current.next;
        current.next = null;
        return remove;
        // Write your hypothesis on the time complexity of this method here
        // Time Complexity: 0(n)
    }

    peekAtHead() {
        // Return value of head node
        return this.head ? this.head.value : undefined; // Time Complexity: 0(1)
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
