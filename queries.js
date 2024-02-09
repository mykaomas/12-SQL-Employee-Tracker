const mysql = require('mysql2/promise');

class Database {
  constructor(config) {
    this.pool = mysql.createPool(config);
  }

  async query(sql, values) {
    const [rows] = await this.pool.query(sql, values);
    return rows;
  }

  async close() {
    await this.pool.end();
  }

  async viewDepartments() {
    return await this.query('SELECT id, name FROM department');
  }

  async viewRoles() {
    return await this.query(`
      SELECT job.id, title, salary, department.name AS department
      FROM job
      INNER JOIN department ON job.department_id = department.id
    `);
  }

  async viewEmployees() {
    return await this.query(`
      SELECT employee.id, first_name, last_name, title AS role, salary, department.name AS department
      FROM employee
      INNER JOIN role ON employee.role_id = role.id
      INNER JOIN department ON role.department_id = department.id
    `);
  }

}

  module.exports = Database;