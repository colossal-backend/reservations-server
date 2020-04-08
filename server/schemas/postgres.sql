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

COPY reservations(restaurantid, party, date) FROM '/Users/tjcasner/reservations-fix.csv' DELIMITER ',' CSV HEADER;


SELECT * FROM reservations WHERE restaurantId = 9512355;

SELECT * FROM reservations;

INSERT INTO reservations (restaurantId, party, date) VALUES (9899123, 8, '2020-05-28 17:00:00');