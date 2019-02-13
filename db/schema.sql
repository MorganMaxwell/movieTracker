CREATE DATABASE movieTracker_db;

USE movieTracker_db;

CREATE TABLE movies (
    id INT NOT NULL AUTO_INCREMENT,
    movie_name VARCHAR(30) NOT NULL,
    rating VARCHAR(5) NOT NULL,
    watched BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);