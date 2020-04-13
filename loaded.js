/* eslint-disable eqeqeq */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 100 },
    { duration: '20s', target: 1500 },
  ],
};


// const randPropId = () => Math.floor(Math.random() * (10000000 - 1) + 1);


export default function () {
  const res = http.get('http://ec2-18-222-48-218.us-east-2.compute.amazonaws.com/reservations/100');

  check(res, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 2000,
  });
  sleep(0.01);
}
