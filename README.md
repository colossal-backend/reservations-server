# Reservations

This project is the reservations component to a restaurant review app. 

## Related Projects

  - https://github.com/Denali-Outdoors/image-carousel-server
  - https://github.com/Denali-Outdoors/reviews-server

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

The app should be fairly easy to use. Go through the following steps to get it setup:
1. Pull the container from Docker hub (docker pull roryroccio/fec:server-1.0)
2. Create a .env file in the root directory with the following schema:
    DB_HOST=<database ip address>
    DB_USER=<database username>
    DB_PASS=<database password>
    DB=<database name>
3. Create database 'reservations_db' in MySQL server
3. Run the command <$ npm run seed> to seed the database with dummy data
4. Start the server wtih <$ npm start>

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MySQL

## Development

### Installing Dependencies

From within the root directory:

npm install
