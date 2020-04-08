/* eslint-disable max-len */
/* eslint-disable no-console */
const Cassandra = require('./CassandraModel');

const get = (req, res) => {
  const { restaurantId, partySize } = req.params;

  console.log(`GET /reservations/${restaurantId}/${partySize}`);
  Cassandra.getReservation(restaurantId, (err, reservations) => {
    if (err) {
      console.log(err, 'error getting reservations');
    } else {
      const availability = reservations.map((dateTime) => ({ ...dateTime, available: dateTime.capacity - dateTime.occupied - partySize > 0 }))
        .filter((dateTime) => dateTime.available === false);
      res.send(availability);
    }
  });
};

module.exports = { get };
