DROP DATABASE IF EXISTS v4469xjwuyt7kjrt;

CREATE DATABASE v4469xjwuyt7kjrt;

USE v4469xjwuyt7kjrt;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    createdAt TIMESTAMP NOT NULL
);