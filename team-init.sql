CREATE DATABASE IF NOT EXISTS simple;
USE simple;
CREATE TABLE IF NOT EXISTS users (
    id          int unsigned AUTO_INCREMENT PRIMARY KEY,
    firstname   varchar(100),
    lastname    varchar(100),
    role        varchar(100)
);
CREATE TABLE IF NOT EXISTS events (
    id          int unsigned AUTO_INCREMENT PRIMARY KEY,
    event       varchar(200),
    user        varchar(100),
    time        varchar(100)
);

INSERT INTO users (firstname, lastname, role) VALUES ('Dillon', 'Vu', 'Staff'),
                                                     ('Lucius', 'Ho', 'Staff'),
                                                     ('Kyle', 'Holtby', 'Staff'),
                                                     ('Hasin', 'Raihan', 'Staff');

INSERT INTO users (firstname, lastname, role) VALUES ('1', 'Cus', 'Customer'),
                                                     ('2', 'Cus', 'Customer'),
                                                     ('3', 'Cus', 'Customer');

INSERT INTO events (event, user, time) VALUES ('353Project', 'Kyle Holtby', '2021/11/25 4:45 PM');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'admin';
FLUSH PRIVILEGES;