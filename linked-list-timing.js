const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let startTime, endTime;

//Single Lineked List: addToHead()
// Time Complexity: 0(1)
let LinkedList = new LinkedList();
for(let i = 0; i < 100;i += 10){
    startTime = Date.now();
    for(let i = 0; i < 1000; i++){
        LinkedList = addToHead(i);
    }
    endTime = Date.now();
    console.log(endTime - startTime);
}

console.log("--------")

// Single Linked List: addToTail()
// Time Complexity: 0(n);
LinkedList = new LinkedList();
for(let i = 0; i < 100;i += 10){
    startTime = Date.now();
    for(let i = 0; i < 1000; i++){
        LinkedList = addToTail(i);
    }
    console.log(Date.now - startTime);
}

// Doubly Linked List: addToHead();
// Time Complexity: 0(1)
let DoublyLinkedList = new DoublyLinkedListNode();
for(let i = 0; i < 100; i += 10){
    startTime = Date.now();
    for(let i = 0; i < 1000; i++){
        DoublyLinkedList =  addToHead(i);
    }
    console.log(Date.now() - startTime);
}

// Doubly Linked List: addToTail()
// Time Complexity: 0(1)
DoublyLinkedList = new DoublyLinkedListNode();
for(let i = 0; i < 100; i += 10){
    startTime = Date.now();
    for(let i = 0; i < 1000; i++){
        DoublyLinkedList = addToTail(i);
    }
    endTime = Date.now();
    console.log(endTime - startTime);
}
