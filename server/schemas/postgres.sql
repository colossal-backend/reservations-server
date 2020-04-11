DROP DATABASE IF EXISTS reservations;

CREATE DATABASE reservations;

USE reservations;

CREATE TABLE reservations (
	id INT,
	restaurantId INT,
	party INT,
	date TIMESTAMP,
	PRIMARY KEY (id),
	FOREIGN KEY (restaurantId) REFERENCES restaurants (id)
);

CREATE TABLE restaurants (
	id INT,
	name TEXT,
	max_seats INT,
	PRIMARY KEY (id)
)

COPY reservations(restaurantid, party, date) FROM 'reservations.csv' DELIMITER ',' CSV HEADER;

\COPY restaurants(name, max_seats) FROM 'ec2-user@ec2-3-22-164-4.us-east-2.compute.amazonaws.com:~/restaurants.csv' DELIMITER ',' CSV HEADER;

\COPY restaurants(name, max_seats) FROM ''reservations.csv'' DELIMITER ',' CSV HEADER;
\COPY restaurants(name, max_seats) FROM 'ec2-user@ip-172-31-30-25:restaurants.csv' DELIMITER ',' CSV HEADER;
COPY restaurants(name, max_seats) FROM 'restaurants.csv' DELIMITER ',' CSV HEADER;



SELECT * FROM reservations WHERE restaurantId = 9512355;

SELECT * FROM reservations;

INSERT INTO reservations (restaurantId, party, date) VALUES (9899123, 8, '2020-05-28 17:00:00');