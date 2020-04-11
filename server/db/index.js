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
  host: '3.22.112.122',
  user: 'postgres',
  database: 'reservationsdb',
  port: 5432,
});

// const connection = new pg.Pool({
//   host: 'localhost',
//   user: 'tjcasner',
//   database: 'reservations',
//   port: 5432,
// });


connection.connect((err) => {
  if (err) {
    console.error('Connection Error', err.stack);
  } else {
    console.log('Connected to Postgres DB');
  }
});

module.exports = connection;
