CREATE DATABASE IF NOT EXISTS proyectdb;

USE proyectdb;

CREATE TABLE IF NOT EXISTS proyect(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name VARCHAR(60) NOT NULL,
    startDate DATE NOT NULL,
    finishDate DATE NOT NULL,
    price INT NOT NULL
);

INSERT INTO proyect (name, startDate, finishDate, price) VALUES ('casa1', now(), now(),2500000);
INSERT INTO proyect (name, startDate, finishDate, price) VALUES ('casa2', now(), now(),4500000);