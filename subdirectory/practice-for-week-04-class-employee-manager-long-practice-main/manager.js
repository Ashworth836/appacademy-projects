const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, salary, title, manager, employees = []){
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee){
        this.employees.push(employee);
        return employee;
    }

    bonusCalculate(){

        // let sum = 0;

        // for (let employee = 0; employee < this.employees.length; employee++) {
        //     const element = this.employees[employee];

        //     if(element instanceof Manager){
        //         sum += element.salary + element.bonusCalculate();
        //     }else{
        //         sum += element.salary;
        //     }
        // }

        // return sum;
        var sum;
        sum = 0;

        for (var employee = 0; employee < this.employees; employee += 1) {
          employee = this.employees[employee];

          if (employee instanceof Manager) {
            sum += employee.salary + employee.bonusCalculate();
          } else {
            sum += employee.salary;
          }
        }

        return sum;
    }

    calculateBonus(multiplier){
        return (this.salary + this.bonusCalculate()) * multiplier;
    }
}

try {
    module.exports = Manager;
} catch {
    module.exports = null;
}
