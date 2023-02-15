class DynamicArray {

  constructor(defaultSize=4) {
    // Your code here
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity)
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {
    // Your code here
    if(this.length + 1 > this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    // Your code here
    if(this.length > 0) this.length--;
    return this.data[this.length];
  }

  shift() {
    // Your code here
    const first = this.data[0];
    for(let i = 1; i < this.length; i++){
      this.data[i - 1] = this.data[i];
    }

    this.length--;
    this.data[this.length] = undefined;
    return first;
  }

  unshift(val) {
    // Your code here
    for(let i = this.length; i >= 1; i--){
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
  }

  indexOf (val) {
    // Your code here
    for(let i = 0; i < this.length; i++){
      if(this.data[i] === val){
        return i;
      }
    }
    return -1;
  }

  resize () {
    // Your code here
    const array = new Array(this.capacity * 2);
    for(let i = 0; i < this.data.length; i++){
      array[i] = this.data[i];
    }

    this.capacity = this.capacity *= 2;
    this.data = array;
  }

}


module.exports = DynamicArray;
