// Write your solution in this file!
let describeEmployees = () => {
    // Function logic to describe employees
};

let updateEmployeeWithKeyAndValue = (employee, key, value) => ({ ...employee, [key]: value });
var employee = { streetAddress: '10 Wall Street' };

var updatedEmployee = { ...employee, streetAddress: '11 Broadway' };

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

var employee = {
    name: 'Sam',
    streetAddress: '10 Downing Street'
};

var updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
