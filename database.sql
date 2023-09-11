
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "profile_pic" VARCHAR (255),
    "channel_name" VARCHAR (255),
    "about" VARCHAR (255)
);

CREATE TABLE video (
	id SERIAL PRIMARY KEY,
	video_url Varchar (1000),
	thumbnail Varchar (255),
	time Varchar (255),
	channel_pic Varchar (255),
	channel_title Varchar (255),
	subscribtion_count Integer,
	published_at Varchar (255),
  video_title  Varchar (255)
);

CREATE TABLE user_video (
	id SERIAL PRIMARY KEY,
	user_id int, 
	foreign key (user_id) references "user"(id),
	video_id int, 
	foreign key (video_id) references video(id)
);

CREATE TABLE playlist (
	id SERIAL PRIMARY KEY,
	playlist_name Varchar (255),
	user_id int, 
	foreign key (user_id) references "user"(id)
);

CREATE TABLE playlist_video (
	id SERIAL PRIMARY KEY,
	playlist_id int, 
	foreign key (playlist_id) references playlist(id),
	video_id int, 
	foreign key (video_id) references video(id)
);