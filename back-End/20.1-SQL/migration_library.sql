CREATE DATABASE library;
USE library;

CREATE TABLE author(
	id INT NOT NULL AUTO_INCREMENT,historyhistory
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE category(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE client(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE book(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    author_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) REFERENCES author (id),
    FOREIGN KEY (category_id) REFERENCES category (id)
);

CREATE TABLE history(
	id INT NOT NULL AUTO_INCREMENT,
    date DATETIME NOT NULL DEFAULT NOW(),
    book_id INT NOT NULL,
    client_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (book_id) REFERENCES book (id),
    FOREIGN KEY (client_id) REFERENCES client (id)
);