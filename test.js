// Your code here
const Employee = require('./employee');

const john = new Employee("John Wick", "Dog Lover");
const name = john.sayName.bind(john);
global.setTimeout(name, 2000);

const occupation = john.sayOccupation.bind(john);
global.setTimeout(occupation, 3000);

try{
    module.exports = test;
}catch{
    module.exports = null;
}
