const Employee = require("./Employee");

class Intern extends Employee{
    super(name, id, email);
    constructor(school){
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