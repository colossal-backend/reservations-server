/* eslint-disable max-len */
/* eslint-disable no-console */
const Model = require('./models');

const get = (req, res) => {
  const { restaurantId, partySize } = req.params;
  // const { partySize } = req.params;
  console.log(`GET /reservations/${restaurantId}/${partySize}`);
  Model.getReservation(restaurantId, (err, reservations) => {
    if (err) {
      console.log(err, 'error getting reservations');
    } else {
      const availability = reservations.map((dateTime) => ({ ...dateTime, available: dateTime.capacity - dateTime.occupied - partySize > 0 }))
        .filter((dateTime) => dateTime.available === false);
      res.send(availability);
    }
  });
};

const post = (req, res) => {
  console.log('POST /reservations');
  const { restaurantId, partySize, date } = req.body;
  Model.postReservation(restaurantId, partySize, date, (err, reservation) => {
    if (err) {
      console.log(err, 'error saving reservation');
    } else {
      res.send(reservation);
    }
  });
};

const update = (req, res) => {
  console.log('PATCH /reservations');
  const reservationId = req.params.id;
  const request = req.body;
  Model.updateReservation(reservationId, request, (err, reservation) => {
    if (err) {
      console.log(err, 'error updating reservation');
    } else {
      res.send(reservation);
    }
  });
};

const destroy = (req, res) => {
  const reservationId = req.params.id;
  console.log(`DELETE /reservations/${reservationId}`);
  Model.deleteReservation(reservationId, (err, reservation) => {
    if (err) {
      console.log(err, 'error deleting reservation');
    } else {
      res.send(reservation);
    }
  });
};

module.exports = {
  get, post, update, destroy,
};
