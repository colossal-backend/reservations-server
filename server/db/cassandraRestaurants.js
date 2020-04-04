/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');
const faker = require('faker');
const generator = require('./reservationData');

const restaurantCount = 1000;

const restaurantsCreator = createCsvWriter({
  path: './cassRestaurants.csv',
  header: [
    { id: 'restaurantId', title: 'Restaurant ID' },
    { id: 'date', title: 'Reservation Date' },
    { id: 'max_seats', title: 'Restaurant Max Seats' },
    { id: 'name', title: 'Restaurant Name' },
    { id: 'party', title: 'Reservation Party Size' },
    { id: 'reservationId', title: 'Reservation ID' },
  ],
});

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// create new progress bar
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const generateRestaurants = () => {
  const restaurants = [];
  for (let i = 0; i < restaurantCount; i++) {
    const restaurantsObject = {};
    restaurantsObject.restaurantId = randomInt(1, 10000000);
    restaurantsObject.name = `${faker.company.companyName()}`;
    restaurantsObject.max_seats = randomInt(10, 30);
    restaurantsObject.party = randomInt(2, 10);
    restaurantsObject.reservationId = faker.random.uuid();
    const randomMonth = generator.getRandomMonth();
    const randomDay = generator.getRandomDay();
    const randomHour = generator.getRandomHour();
    const randomMinutes = generator.getRandomMinutes();
    const date = `2020-${randomMonth}-${randomDay} ${randomHour}:${randomMinutes}:00`;
    restaurantsObject.date = date;
    restaurants.push(restaurantsObject);
  }
  return restaurants;
};

let batches = 0;

const addRestaurants = () => {
  if (batches < 50000) {
    batches += 1;
    const data = generateRestaurants();
    restaurantsCreator.writeRecords(data)
      .then(() => {
        bar.increment();
        addRestaurants();
      });
  } else {
    bar.stop();
    console.timeEnd('50M Generation Time');
    console.log('...Done');
    process.exit();
  }
};

console.time('50M Generation Time');

bar.start(50000, 0);
addRestaurants();
