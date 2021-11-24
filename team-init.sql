CREATE DATABASE IF NOT EXISTS simple;
USE simple;
CREATE TABLE IF NOT EXISTS users (
    id          int unsigned AUTO_INCREMENT PRIMARY KEY,
    firstname   varchar(100),
    lastname    varchar(100),
    role        varchar(100)
);
CREATE TABLE IF NOT EXISTS donations (
    id          int unsigned AUTO_INCREMENT PRIMARY KEY,
    amount      bigint unsigned,
    user        varchar(100),
    timestamp   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (firstname, lastname, role) VALUES ('Dillon', 'Vu', 'Staff'),
                                                     ('Lucius', 'Ho', 'Staff'),
                                                     ('Kyle', 'Holtby', 'Staff'),
                                                     ('Hasin', 'Raihan', 'Staff');

INSERT INTO users (firstname, lastname, role) VALUES ('1', 'Cus', 'Customer'),
                                                     ('2', 'Cus', 'Customer'),
                                                     ('3', 'Cus', 'Customer');

INSERT INTO donations (amount, user) VALUES (100, 'Kyle Holtby');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'admin';
FLUSH PRIVILEGES;