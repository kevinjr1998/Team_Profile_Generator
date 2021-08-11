const Employee = require("./Employee");

class Intern extends Employee{
    
    constructor(empName, empID, email, school){
    super(empName, empID, email);

        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;