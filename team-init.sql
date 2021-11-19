CREATE DATABASE IF NOT EXISTS users;
USE users;
CREATE TABLE IF NOT EXISTS members (
    username    varchar(200) NOT NULL primary key,
    name        varchar(100),
    role        varchar(100),
    password    varchar(200)
);

INSERT IGNORE INTO members VALUES ('dillon', 'Dillon', 'Staff', 'admin'),
                                  ('lucius', 'Lucius', 'Staff', 'admin'),
                                  ('kyle', 'Kyle', 'Staff', 'admin'),
                                  ('hasin', 'Hasin', 'Staff', 'admin');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'admin';
FLUSH PRIVILEGES;