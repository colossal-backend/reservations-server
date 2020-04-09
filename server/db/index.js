/* eslint-disable no-console */
// /* eslint-disable no-console */
// const mysql = require('mysql');
// require('dotenv').config();

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error(`Error connecting to MySQL Server: ${err.stack}`);
//     return;
//   }
//   console.log(`Connected to MySQL Server as ID: ${connection.threadId}`);
// });

// module.exports = connection;

const pg = require('pg');
require('dotenv').config();

const connection = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Connection Error', err.stack);
  } else {
    console.log('Connected to Postgres DB');
  }
});

module.exports = connection;
