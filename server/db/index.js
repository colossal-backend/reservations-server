const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
  database: 'reservations_db',
});

connection.connect((err) => {
  if (err) {
    console.error(`Error connecting to MySQL Server: ${err.stack}`);
    return;
  }
  console.log(`Connected to MySQL Server as ID: ${connection.threadId}`);
});

module.exports = connection;
