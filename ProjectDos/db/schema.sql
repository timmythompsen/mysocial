CREATE DATABASE mysocial_db;
USE mysocial_db;
CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	email varchar (100) NOT NULL,
  	facebook_name varchar (50),
    twitter_name varchar (50),
    insta_name varchar (50),
  	PRIMARY KEY(id)
);