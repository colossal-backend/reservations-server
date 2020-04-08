/* eslint-disable no-console */
const Promise = require('bluebird');

module.exports = (db) => {
  Promise.promisifyAll(db);
  return db.queryAsync('CREATE DATABASE IF NOT EXISTS reservations;')
    .then(() => {
      db.queryAsync('USE reservations;');
    })
    .then(() => {
      db.queryAsync('DROP TABLE IF EXISTS reservations, restaurants;');
    })
    .then(() => {
      db.queryAsync(`CREATE TABLE restaurants (
        id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(40),
        max_seats INTEGER);`);
    })
    .then(() => {
      db.queryAsync(`CREATE TABLE reservations (
        id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
        restaurantId INTEGER,
        party INTEGER,
        date DATETIME,
        FOREIGN KEY (restaurantId) REFERENCES restaurants (id));`);
    })
    .then(() => {
      console.log('Successfully configured database');
    })
    .catch((err) => {
      console.log(err.stack);
    });
};
