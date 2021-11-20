CREATE DATABASE IF NOT EXISTS simple;
USE simple;
CREATE TABLE IF NOT EXISTS users (
    username    varchar(200) NOT NULL primary key,
    name        varchar(100),
    role        varchar(100),
    password    varchar(200)
);

INSERT IGNORE INTO users VALUES ('dillon', 'Dillon', 'Staff', 'admin'),
                                ('lucius', 'Lucius', 'Staff', 'admin'),
                                ('kyle', 'Kyle', 'Staff', 'admin'),
                                ('hasin', 'Hasin', 'Staff', 'admin');

INSERT IGNORE INTO users VALUES ('cus1', 'Cus1', 'Customer', 'none'),
                                ('cus2', 'Cus2', 'Customer', 'none'),
                                ('cus3', 'Cus3', 'Customer', 'none');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'admin';
FLUSH PRIVILEGES;