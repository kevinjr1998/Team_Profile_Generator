
class Employee {
    constructor(empName, empID, email){
        this.empName = empName;
        this.email = email;
        this.empID = empID;
    }

    getName(){
        return this.empName;
    }

    getId(){
        return this.empID;
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;