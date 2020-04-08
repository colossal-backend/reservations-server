/* eslint-disable no-console */
require('newrelic');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Controller = require('./controllers');
// const CassandraController = require('./cassandra/CassandraController');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Failed to start server: ${err}`);
  } else {
    console.log(`Listening on ${PORT}`);
  }
});

// Get Reservation
app.get('/reservations/:restaurantId/:partySize', Controller.get);

// Save Reservation
app.post('/reservations', Controller.post);

// // Update Reservation
// app.patch('/reservations/:id/update', Controller.update);

// // Delete Reservation
// app.delete('/reservations/:id/delete', Controller.destroy);

// // Cassandra
// app.get('/reservations/:restaurantId/:partySize', CassandraController.get);
