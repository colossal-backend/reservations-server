/* eslint-disable no-console */
const { Pool } = require('pg');

const connection = new Pool({
  host: '18.222.151.121',
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


// connection.connect((err) => {
//   if (err) {
//     console.error('Connection Error', err.stack);
//   } else {
//     console.log('Connected to Postgres DB');
//   }
// });

module.exports = connection;
