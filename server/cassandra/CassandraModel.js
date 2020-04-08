const Cassandra = require('./index');

const getReservation = (restaurantId, callback) => {
  Cassandra.execute(`SELECT restaurants.id as restaurant, SUM(party_size) AS occupied, restaurants.max_seats AS capacity, date_time 
      FROM reservations INNER JOIN restaurants ON (restaurants.id = reservations.restaurantId) 
      WHERE restaurantId = ${restaurantId} GROUP BY date_time;`,
  (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports = { getReservation };
