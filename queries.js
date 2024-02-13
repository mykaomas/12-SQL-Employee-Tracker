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
    return await this.query('SELECT id, name FROM departments');
  }

  async viewRoles() {
    return await this.query(`
    SELECT jobs.id, title, salary, departments.name AS department
    FROM jobs
    INNER JOIN departments ON jobs.department_id = departments.id
    `);
  }

  async viewEmployees() {
    return await this.query(`
      SELECT employees.id, first_name, last_name, title AS role, salary, departments.name AS department
      FROM employees
      INNER JOIN jobs ON employees.role_id = jobs.id
      INNER JOIN departments ON jobs.department_id = departments.id
    `);
}

}

  module.exports = Database;