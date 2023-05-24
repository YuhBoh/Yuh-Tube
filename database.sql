
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
	user_id int,
	FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE user_profile_video (
	id SERIAL PRIMARY KEY,
	user_profile_id int, 
	foreign key (user_profile_id) references user_profile(id),
	video_id int, 
	foreign key (video_id) references video(id)
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
	user_profile_id int, 
	foreign key (user_profile_id) references user_profile(id)
);

CREATE TABLE playlist_video (
	id SERIAL PRIMARY KEY,
	playlist_id int, 
	foreign key (playlist_id) references playlist(id),
	video_id int, 
	foreign key (video_id) references video(id)
);
