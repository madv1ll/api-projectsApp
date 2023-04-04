CREATE DATABASE IF NOT EXISTS proyectdb;

USE proyectdb;

CREATE TABLE IF NOT EXISTS proyect(
    id SERIAL NOT NULL,
    PRIMARY KEY (id),
    name VARCHAR(60) NOT NULL,
    startDate DATE NOT NULL,
    finishDate DATE NOT NULL,
    price INT NOT NULL
);

INSERT INTO proyect (name, startDate, finishDate, price) VALUES ('casa1', now(), now(),2500000);
INSERT INTO proyect (name, startDate, finishDate, price) VALUES ('casa2', now(), now(),4500000);

CREATE TABLE IF NOT EXISTS item(
    id SERIAL NOT NULL,
    PRIMARY KEY (id),
    name VARCHAR(60) NOT NULL,
    unitPrice INT NOT NULL,
    quantity INT NOT NULL,
    totalPrice INT NOT NULL,
    proyectId INT NOT NULL,
    purchaseDate DATE NOT NULL,
    FOREIGN KEY (proyectId) REFERENCES proyect(id) ON DELETE CASCADE
);
INSERT INTO item (name,unitPrice,quantity,totalPrice,proyectId,purchaseDate) values ('cable tierra 2,5', 5000, 2, 10000, 1, '20230320');
INSERT INTO item (name,unitPrice,quantity,totalPrice,proyectId,purchaseDate) values ('cable fase 2,5', 5500, 2, 11000, 2, '20230320');

CREATE TABLE IF NOT EXISTS employee (
    id SERIAL NOT NULL,
    PRIMARY KEY (id),
    name VARCHAR(60) NOT NULL,
    LastName VARCHAR(60) NOT NULL,
    startDate DATE NOT NULL,
    finishDate DATE NOT NULL,
    salary INT NOT NULL,
    projectId INT NOT NULL,
    FOREIGN KEY (projectId) REFERENCES proyect(id) ON DELETE CASCADE
);
INSERT INTO employee (name, lastName, startDate, finishDate, salary, projectId) VALUES ('Kevin', 'Tobar', now(), now(), 2500000, 2);
INSERT INTO employee (name, lastName, startDate, finishDate, salary, projectId) VALUES ('Martin', 'Tobar', now(), now(), 2500000, 2);

CREATE TABLE IF NOT EXISTS emlpoyee_assistance (
    id SERIAL NOT NULL,
    PRIMARY KEY (id),
    employee_id INT,
    FOREIGN KEY (employee_id) REFERENCES employee(id) ON DELETE CASCADE,
    workDays INT NOT NULL
);