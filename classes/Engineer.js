const { moduleExpression } = require("@babel/types");
const Employee = require("./Employee");

class Engineer extends Employee{
    
    constructor(empName, empID, email, gitHub){
        super(empName, empID, email);
        this.gitHub = gitHub;
    }

    getGitHub(){
        return `https://github.com/${this.gitHub}/`;
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;