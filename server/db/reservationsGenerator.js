/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const faker = require('faker');
const cliProgress = require('cli-progress');

const generator = require('./reservationData');

const reservationCount = 1000;

const reservationsCreator = createCsvWriter({
  path: './reservations.csv',
  header: [
    { id: 'restaurantId', title: 'RESTAURANT ID' },
    { id: 'party', title: 'PARTY' },
    { id: 'date', title: 'DATE' },
  ],
});


// create new progress bar
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generateReservations = () => {
  const reservations = [];
  for (let i = 0; i < reservationCount; i++) {
    const reservationsObject = {};
    reservationsObject.restaurantId = randomInt(1, 10000000);
    reservationsObject.party = randomInt(2, 10);
    const randomMonth = generator.getRandomMonth();
    const randomDay = generator.getRandomDay();
    const randomHour = generator.getRandomHour();
    const randomMinutes = generator.getRandomMinutes();
    let randomSeconds = randomInt(0, 59);
    if (randomSeconds === 0) {
      randomSeconds = `${randomSeconds}${0}`;
    } else if (randomSeconds >= 1 && randomSeconds <= 9) {
      randomSeconds = `${0}${randomSeconds}`;
    }
    const date = `2020-${randomMonth}-${randomDay} ${randomHour}:${randomMinutes}:${randomSeconds}`;
    reservationsObject.date = date;
    reservations.push(reservationsObject);
  }
  return reservations;
};

let batches = 0;

const addReservations = () => {
  if (batches < 100000) {
    batches += 1;
    const data = generateReservations();
    reservationsCreator.writeRecords(data)
      .then(() => {
        bar.increment();
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

bar.start(100000, 0);
addReservations();
