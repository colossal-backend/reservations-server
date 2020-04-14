/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// require('dotenv').config();
// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;
const Controller = require('./controllers');

const app = express();
const port = 5050;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Loader.io
app.get('/loaderio-0ca8e73f7bfd0921d5756514dcde4370', (req, res) => {
  res.sendFile(`${__dirname}/loaderio-0ca8e73f7bfd0921d5756514dcde4370.txt`);
});

// Get Available Reservations
app.get('/reservations/:restaurantId/:partySize', Controller.getAvailable);

// Get all restaurant reservations
app.get('/reservations/:restaurantId', Controller.getReservations);

// Save Reservation
app.post('/reservations', Controller.post);

// // Update Reservation
app.patch('/reservations/:id/update', Controller.update);

// // Delete Reservation
app.delete('/reservations/:id/delete', Controller.destroy);

app.listen(port, (err) => {
  if (err) {
    console.log(`Failed to start server: ${err}`);
  } else {
    console.log(`Listening on ${port}`);
  }
});
