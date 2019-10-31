DROP DATABASE IF EXISTS eazykeyz;
CREATE DATABASE eazykeyz;


CREATE TABLE customerInfo (
ticketNum INT(6) NOT NULL,
userName VARCHAR(20) NOT NULL,
modelName VARCHAR(20) NOT NULL,
returnTime INT NOT NULL
);