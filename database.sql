
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE user_profile (
	id SERIAL PRIMARY KEY,
	profile_pic Varchar (255) Not Null,
	channel_name Varchar (255) Not Null,
	about Varchar (255) Not Null,
	user_id Integer
);

CREATE TABLE user_profile_video (
	id SERIAL PRIMARY KEY,
	user_profile_id Integer,
	user_id Integer
);

CREATE TABLE video (
	id SERIAL PRIMARY KEY,
	video_url Varchar (1000),
	thumbnail Varchar (255),
	video_time Varchar (255),
	channel_pic Varchar (255),
	video_author Varchar (255),
	video_subscribers Integer,
	video_stats Varchar (255) 
);

CREATE TABLE playlist (
	id SERIAL PRIMARY KEY,
	playlist_name Varchar (255),
	user_profile_id Integer
);

CREATE TABLE playlist_video (
	id SERIAL PRIMARY KEY,
	playlist_id integer,
	video_id integer
);
