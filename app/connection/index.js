var mysql = require('mysql2/promise');

var con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

module.exports = con;