const inquirer = require('inquirer');
const Database = require('./queries');
const mysql = require('mysql2/promise');

const dbConfig =
{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ems_db'
};
    console.log('Connected to ems_db')
  
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
}

    async function viewDepartments() {
        const departments = await db.viewDepartments();
        console.log("Departments:", departments);
        console.table(departments);
      }

      async function viewRoles() {
        const jobs = await db.viewRoles();
        console.log("jobs:", jobs);
        console.table(jobs);
      }

      async function viewEmployees() {
        const employees = await db.viewEmployees();
        console.log("Employees:", employees);
        console.table(employees);
      }

employeeManagementSystem();