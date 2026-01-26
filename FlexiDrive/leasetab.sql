CREATE DATABASE flexidrive;

show databases;

CREATE USER 'flexi'@'localhost' IDENTIFIED BY '!!)6Livexx)*';

GRANT ALL PRIVILEGES ON flexidrive.* TO 'flexi'@'localhost';

FLUSH PRIVILEGES;

SELECT user, host FROM mysql.user;

