/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');
const cliProgress = require('cli-progress');

const generator = require('./reservationData');

const reservationCount = 100;

const reservationsCreator = createCsvWriter({
  path: './reservations.csv',
  header: [
    { id: 'restaurant_id', title: 'RESTAURANT_ID' },
    { id: 'party', title: 'PARTY' },
    { id: 'date', title: 'DATE' },
  ],
});


// create new progress bar
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const generateReservations = () => {
  const reservations = [];
  for (let i = 0; i < reservationCount; i++) {
    const reservationsObject = {};
    reservationsObject.restaurant_id = faker.random.number({ min: 1, max: 95 });
    reservationsObject.party = faker.random.number({ min: 2, max: 10 });
    const randomMonth = generator.getRandomMonth();
    const randomDay = generator.getRandomDay();
    const randomHour = generator.getRandomHour();
    const randomMinutes = generator.getRandomMinutes();
    const date = `2020-${randomMonth}-${randomDay} ${randomHour}:${randomMinutes}:00`;
    reservationsObject.date = date;
    reservations.push(reservationsObject);
    bar.increment();
  }
  return reservations;
};

let batches = 0;

const addReservations = () => {
  if (batches < 1000000) {
    batches += 1;
    const data = generateReservations();
    reservationsCreator.writeRecords(data)
      .then(() => {
        addReservations();
      });
  } else {
    bar.stop();
    console.timeEnd('Generation Time');
    console.log('...Done');
    process.exit();
  }
};

console.time('Generation Time');

bar.start(100000000, 0);
addReservations();
