-- This is the structure of the database

-- We will be using postgres as our database

-- We can change this to any database of choice later, or ORM. For this i will be writing raw sql queries.


-- db Name contactbook ----

CREATE DATABASE contactbook;

CREATE TABLE contacts(
    id VARCHAR(255) PRIMARY KEY,
    contactEmail VARCHAR(255),
    contacName VARCHAR(30),
    contact INT,
    date VARCHAR(300)
);
CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);