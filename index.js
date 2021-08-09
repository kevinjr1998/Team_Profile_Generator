const Employee = require("./classes/Employee");
const Manager = require("./classes/Manager");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");

const Inquirer = require("Inquirer");
const inquirer = require("Inquirer");

const managerQuestions = [
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
];

function jobRole() {
  inquirer
    .prompt({
      type: "list",
      name: "role",
      message: "Enter Job Role",
      choices: ["Finish Building Team", "Engineer", "Intern"],
    })
    .then((answer) => {
      switch (answer) {
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
      ])
}

function init() {
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
  ])
  .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerID,
      answer.managerEmail
    );
    
    templateHelper(manager);

    jobRole();
  });
}

init();
