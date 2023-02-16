class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here

    let newNode = new KeyValuePair(key, value);
    let dataLocation = this.hashMod(key);

    if(this.data[dataLocation]) {
      let nodeItem = this.data[dataLocation];
      
      while (nodeItem !== null && nodeItem.key !== key) {
        nodeItem = nodeItem.next;
      }
    
      if (nodeItem === null) {
        newNode.next = this.data[dataLocation]; // Connect to LinkedList
        
        this.data[dataLocation] = newNode; // Set head to new node
        this.count++;
      } else {

      nodeItem.value = newNode.value;
      };
      
    } else {
      this.data[dataLocation] = newNode;
      this.count++;
    }



  }



  read(key) {
    // Your code here

    let mod = this.hashMod(key);
    let newNode = this.data[mod];


    while (newNode !== null && !(key === newNode.key)) {
      newNode = newNode.next
    } 
    if (newNode === null) return undefined;

    return newNode.value;

  }



  resize() {
    // Your code here

    let dataCopy = this.data.slice();
    let countCopy = this.count;

    this.capacity = this.capacity * 2;

    this.data = new Array(this.capacity).fill(null);

    for (let i = 0; i < dataCopy.length; i++) {
      let copied = dataCopy[i];
      while (copied) {
        this.insert(copied.key, copied.value);
        copied = copied.next;
      }

    this.count = countCopy;
  
    }
  }


  delete(key) {
    // Your code here
    let mod = this.hashMod(key);  
    let node = this.data[mod];
    let prev;     

    while (node !== null && !(key === node.key)) {
      prev = node;
      node = node.next
    }

    if (node === null) return "Key not found";
     
    if (prev) {
      prev.next  = node.next;

    } else { 
      this.data[mod] = node.next;
    }

    this.count--;
  }
}


module.exports = HashTable;
