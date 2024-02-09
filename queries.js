const mysql = require('mysql2/promise');

class Database {
  constructor(config) {
    this.pool = mysql.createPool(config);
  }