DROP DATABASE IF EXISTS filghts_db;
CREATE DATABASE filghts_db;
USE filghts_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE saved_flights (
    id INT NOT NULL AUTO_INCREMENT,
    flight_num VARCHAR(255) NOT NULL,
    departure_airport VARCHAR(255) NOT NULL,
    arrival_airport VARCHAR(255) NOT NULL,
    departure_date VARCHAR(255) NOT NULL,
    return_date VARCHAR(255) NOT NULL,
    oneWay BOOLEAN DEFAULT false,
    numberOfBookableSeats INT NULL,
    PRIMARY KEY (id)
)
