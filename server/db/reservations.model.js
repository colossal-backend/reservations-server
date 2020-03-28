const db = require('./index.js');

module.exports.getReservations = (restaurantID, callback) => {
  db.query(`SELECT restaurants.id as restaurant, SUM(party_size) AS occupied, restaurants.max_seats AS capacity, date_time 
    FROM reservations INNER JOIN restaurants ON (restaurants.id = reservations.id_restaurants) 
    WHERE id_restaurants = ${restaurantID} GROUP BY date_time;`,
  (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports.postReservation = (data, callback) => {
  db.query(`INSERT INTO reservations (id_restaurants, party_size, date_time) VALUES (${data.restaurantID}, ${data.partySize}, '${data.date}');`,
    (err) => {
      if (err) {
        callback(err);
      }
    });
};
