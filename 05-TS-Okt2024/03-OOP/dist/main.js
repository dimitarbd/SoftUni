const employee = {
    salary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.salary + this.overtime + this.rate;
    }
};
console.log(employee.getWage());
