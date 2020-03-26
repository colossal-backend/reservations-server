const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL Server: ${err.stack}`);
    return;
  }
  console.log(`Connected to MySQL Server as ID: ${connection.threadId}`);
});

module.exports = connection;
