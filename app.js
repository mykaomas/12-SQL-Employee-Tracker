const inquirer = require('inquirer');
const Database = require('./queries');

const dbConfig = {
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const db = new Database(dbConfig);

async function employeeManagementSystem() {
    console.log('Welcome to your Employee Management System!');
  
    while (true) {
      const { choice } = await inquirer.prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'What would you like to do?',
          choices: [
            'View departments',
            'View roles',
            'View employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
          ]
        }
      ]);

    switch (choice) {
        case 'View departments':
          await viewDepartments();
          break;
        case 'View roles':
          await viewRoles();
          break;
        case 'View employees':
          await viewEmployees();
          break;
        case 'Add a department':
          await addDepartment();
          break;
        case 'Add a role':
          await addRole();
          break;
        case 'Add an employee':
          await addEmployee();
          break;
        case 'Update an employee role':
          await updateEmployeeRole();
          break;
        case 'Exit':
          console.log('Goodbye!');
          await db.close();
          return;
      }
    }

    async function viewDepartments() {
        const departments = await db.viewDepartments();
        console.log("Departments:", departments);
        console.table(departments);
      }

      async function viewRoles() {
        const jobs = await db.viewRoles();
        console.log("jobs:", jobs);
        console.table(roles);
      }
  }

employeeManagementSystem()