/* eslint-disable no-console */
const pg = require('pg');


const connection = new pg.Pool({
  host: '3.22.112.122',
  user: 'postgres',
  database: 'reservationsdb',
  max: 30,
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
