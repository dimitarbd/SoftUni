const employee = {
    salary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.salary + this.overtime + this.rate;
    }
};
console.log(employee.getWage());
class Person {
    /**
     *
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const person1 = new Person('Ivan', 'Petrov');
console.log(person1.getFullName());
const person2 = new Person('Martin', 'Shopov');
console.log(person2.getFullName());
