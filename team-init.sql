CREATE DATABASE IF NOT EXISTS simple;
USE simple;
CREATE TABLE IF NOT EXISTS users (
    username    varchar(200) NOT NULL primary key,
    name        varchar(100),
    role        varchar(100),
    password    varchar(200)
);
CREATE TABLE IF NOT EXISTS events (
    events      varchar(200),
    user        varchar(100),
    time        varchar(100)
);

INSERT IGNORE INTO users VALUES ('dillon', 'Dillon', 'Staff', 'admin'),
                                ('lucius', 'Lucius', 'Staff', 'admin'),
                                ('kyle', 'Kyle', 'Staff', 'admin'),
                                ('hasin', 'Hasin', 'Staff', 'admin');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'admin';
FLUSH PRIVILEGES;