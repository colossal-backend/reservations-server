const db = require('./db/index');

const getReservation = (restaurantId, callback) => {
  db.query(`SELECT restaurants.id as restaurant, SUM(party_size) AS occupied, restaurants.max_seats AS capacity, date_time 
    FROM reservations INNER JOIN restaurants ON (restaurants.id = reservations.id_restaurants) 
    WHERE id_restaurants = ${restaurantId} GROUP BY date_time;`,
  (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const postReservation = (reservationId, partySize, date, callback) => {
  db.query(`INSERT INTO reservations (id_restaurants, party_size, date_time) VALUES (${reservationId}, ${partySize}, '${date}');`,
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
};

const updateReservation = (reservationId, request, callback) => {
  db.query(`UPDATE reservations SET party_size=${request.partySize}, date_time=${request.date} WHERE id=${reservationId}`,
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
