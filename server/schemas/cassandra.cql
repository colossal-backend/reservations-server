DROP KEYSPACE IF EXISTS reservations;

CREATE KEYSPACE IF NOT EXISTS reservations WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor'};

USE reservations;

CREATE TABLE restaurants (
    restaurantid INT,
    name TEXT,
    max_seats INT,
    reservationId UUID,
    party INT,
    date TIMESTAMP,
    PRIMARY KEY(restaurantid, date)
)


SELECT * FROM restaurants WHERE restaurantId = 9512355;

INSERT INTO restaurants (restaurantId, name, max_seats, reservationId, party, date) VALUES (10, 'new name', 15, uuid(), 8, toTimeStamp(now()));

COPY restaurants FROM '/Users/tjcasner/cassRestaurants.csv' WITH DELIMITER =',' AND HEADER=TRUE;