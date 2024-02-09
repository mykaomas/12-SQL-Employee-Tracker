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

  async viewAllDepartments() {
    return await this.query('SELECT id, name FROM department');
  }

  async viewRoles() {
    return await this.query(`
      SELECT role.id, title, salary, department.name AS department
      FROM role
      INNER JOIN department ON role.department_id = department.id
    `);
  }

}

  module.exports = Database;