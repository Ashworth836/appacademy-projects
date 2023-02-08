class Employee{
    constructor(name, salary, title, manager = null){
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if(manager){
            this.manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier){
        return this.salary * multiplier;
    }
}

try {
    module.exports = Employee;
} catch {
    module.exports = null;
}
