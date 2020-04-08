/* eslint-disable no-console */
const db = require('./db/index');

const getReservation = (restaurantId, callback) => {
  db.query(`SELECT restaurants.id as restaurant, SUM(party) AS occupied, restaurants.max_seats AS capacity, date 
    FROM reservations INNER JOIN restaurants ON (restaurants.id = reservations.restaurantId) 
    WHERE restaurantId = ${restaurantId} GROUP BY restaurant, date;`,
  (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.rows);
    }
  });
};

const postReservation = (restaurantId, partySize, date, callback) => {
  db.query(`INSERT INTO reservations (restaurantId, party, date) VALUES (${restaurantId}, ${partySize}, '${date}');`,
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
};

const updateReservation = (reservationId, request, callback) => {
  db.query(`UPDATE reservations SET party=${request.partySize}, date=${request.date} WHERE id=${reservationId}`,
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
};

const deleteReservation = (reservationId, callback) => {
  db.query(`DELETE FROM reservations reservations WHERE id=${reservationId}`,
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
};

module.exports = {
  getReservation, postReservation, updateReservation, deleteReservation,
};
