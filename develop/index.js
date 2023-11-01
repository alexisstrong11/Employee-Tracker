const db = require("mysql2");
const inquirer = require("inquirer");

const db = mysql.connection(
    {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db',
},
console.log('connected to the employee database')
  );

  function init() {
    inquirer.prompt([{
        type: "list",
        name: "choices",
        message: "What would you like to do?",
        choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit",
        ],
    }])
    .then((answer) => {
        switch (answer.action) {
          case "View all departments":
            viewAllDepartments();
            break;
          case "View all roles":
            viewAllRoles();
            break;
          case "View all employees":
            viewAllEmployees();
            break;
          case "Add a department":
            addDepartment();
            break;
          case "Add a role":
            addRole();
            break;
          case "Add an employee":
            addEmployee();
            break;
          case "Update an employee role":
            updateEmployeeRole();
            break;
          case "Exit":
            connection.end();
            break;
          default:
            console.log("Invalid. Please try again.");
            startTracker();
        }
        });
};


  init();