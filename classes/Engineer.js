const { moduleExpression } = require("@babel/types");
const Employee = require("./Employee");

class Engineer extends Employee{
    super(name, id, email);
    constructor(gitHub){
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