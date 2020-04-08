/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
/*
RANDOM DATE GENERATION UTILITIES
*/
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomMonth = () => {
  // first, generate random dates in MySQL friendly format ('yyyy-mm-dd hh:mm:ss')
  const randomMonth = randomInt(3, 6).toString();
  if (randomMonth.length === 1) {
    return `0${randomMonth}`; // ENSURES THAT NO SINGLE-DIGIT NUMBERS ARE PASSED TO DATE STRING (MYSQL ERRORS)
  }
  return randomMonth;
};

const getRandomDay = () => {
  const randomDay = randomInt(1, 30).toString();
  if (randomDay.length === 1) {
    return `0${randomDay}`; // ENSURES THAT NO SINGLE-DIGIT NUMBERS ARE PASSED TO DATE STRING (MYSQL ERRORS)
  }
  return randomDay;
};

const getRandomHour = () => {
  const randomHour = randomInt(9, 22).toString();
  if (randomHour.length === 1) {
    return `0${randomHour}`; // ENSURES THAT NO SINGLE-DIGIT NUMBERS ARE PASSED TO DATE STRING (MYSQL ERRORS)
  }
  return randomHour;
};

const getRandomMinutes = () => (faker.random.arrayElement(['00', '30']));
const getRandomSeconds = () => (faker.random.arrayElement(['00', '60']));


module.exports = {
  getRandomDay, getRandomHour, getRandomMinutes, getRandomMonth, getRandomSeconds,
};
