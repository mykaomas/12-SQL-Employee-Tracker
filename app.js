const inquirer = require('inquirer');
const Database = require('./queries');

const dbConfig = {
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
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
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
          ]
        }
      ]);

    switch (choice) {
        case 'View all departments':
          await viewDepartments();
          break;
        case 'View all roles':
          await viewRoles();
          break;
        case 'View all employees':
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
          await db.close(); // Close MySQL connection
          return;
      }
    }
  }