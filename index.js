const Employee = require("./classes/Employee");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const temp = require("./src/templateHelper.js");
const inquirer = require("Inquirer");

function jobRole() {
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "Enter Job Role",
      choices: ["Finish Building Team", "Engineer", "Intern"],
    })
    .then((answer) => {
      switch (answer.role) {
        case "Finish Building Team":
          finishTeamBuilding();
          break;
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
      }
      
    });
}

function createEngineer() {
    inquirer.prompt([
        {
          type: "input",
          message: "Name of Engineer?",
          name: "name",
        },
        {
          type: "input",
          message: "Engineer ID?",
          name: "empID",
        },
        {
          type: "input",
          message: "Engineer Email?",
          name: "email",
        },
        {
            type: "input",
            message: "Engineer GitHub Username?",
            name: "gitHub",
          }
      ])
      .then((answers) => {
          const engineer = new Engineer(answers.name, answers.empID, answers.email, answers.gitHub);

          temp.templateEngineer(engineer);
          console.log("\nJob Saved \n");
          jobRole();
          
      })
}

function createIntern() {
  inquirer.prompt([
      {
        type: "input",
        message: "Name of Intern?",
        name: "name",
      },
      {
        type: "input",
        message: "Intern ID?",
        name: "empID",
      },
      {
        type: "input",
        message: "Intern Email?",
        name: "email",
      },
      {
          type: "input",
          message: "Intern School ?",
          name: "school",
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.empID, answers.email, answers.school);
        temp.templateIntern(intern);
        console.log("\nJob Saved \n");

        jobRole();
        

    })
}

function finishTeamBuilding(){
  temp.templateEnd();
  console.log("\Team Saved \n");
  return;
}

function init() {
  temp.templateStart();

  inquirer.prompt([
    {
      type: "input",
      message: "Name of Manger?",
      name: "managerName",
    },
    {
      type: "input",
      message: "Manager ID?",
      name: "managerID",
    },
    {
      type: "input",
      message: "Manger Email?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Office Number?",
      name: "officeNumber",
    },
  ])
  .then((answers) => {
    const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
    temp.templateManager(manager);
    console.log("\nJob Saved \n");
    jobRole();
    
  });
}

init();
