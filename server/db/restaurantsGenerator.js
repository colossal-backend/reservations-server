/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');
const cliProgress = require('cli-progress');

const restaurantCount = 100;

const restaurantsCreator = createCsvWriter({
  path: './restaurants.csv',
  header: [
    { id: 'name', title: 'RESTAURANT' },
    { id: 'max_seats', title: 'MAX SEATS' },
  ],
});

// create new progress bar
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const generateRestaurants = () => {
  const restaurants = [];
  for (let i = 0; i < restaurantCount; i++) {
    const restaurantsObject = {};
    restaurantsObject.name = `${faker.company.companyName()}`;
    restaurantsObject.max_seats = faker.random.number({ min: 10, max: 30 });
    restaurants.push(restaurantsObject);
    bar.increment();
  }
  return restaurants;
};

let batches = 0;

const addRestaurants = () => {
  if (batches < 10000) {
    batches += 1;
    const data = generateRestaurants();
    restaurantsCreator.writeRecords(data)
      .then(() => {
        addRestaurants();
      });
  } else {
    bar.stop();
    console.timeEnd('Generation Time');
    console.log('...Done');
    process.exit();
  }
};

console.time('Generation Time');

bar.start(1000000, 0);
addRestaurants();
