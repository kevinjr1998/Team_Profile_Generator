const Employee = require("./Employee");

class Manager extends Employee{
    
    constructor(empName, empID, email, officeNumber){
        super(empName, empID, email);

        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;