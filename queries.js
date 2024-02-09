const mysql = require('mysql2/promise');

class Database {
  constructor(config) {
    this.pool = mysql.createPool(config);
  }

  async query(sql, values) {
    const [rows] = await this.pool.query(sql, values);
    return rows;
  }


}

  module.exports = Database;