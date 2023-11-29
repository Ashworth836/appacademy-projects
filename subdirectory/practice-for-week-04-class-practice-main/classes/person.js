// Your code here
class Person{
  constructor(firstName, lastName, age){
    this.firstName =  firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(people){

    const isInstanceOf = function(array){
      const isTrue = (currentValue) => {
        return currentValue instanceof Person;
      }
      return array.every(isTrue);
    }

    if(!(Array.isArray(people))){
      console.log("introducePeople only takes an array as an argument.");
    }else if(!(isInstanceOf(people))){
      const error = Error("All items in array must be Person class instances.");
    }else{
      people.forEach((element) => {
        return element.introduce();
      });
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
