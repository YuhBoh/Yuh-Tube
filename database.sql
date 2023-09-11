
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

CREATE TABLE user_profile_video (
	id SERIAL PRIMARY KEY,
	user_profile_id int, 
	foreign key (user_profile_id) references user_profile(id),
	video_id int, 
	foreign key (video_id) references video(id)
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

alter table user_profile_video
rename to user_video;

alter table user_video
add foreign key (user_id) references "user"(id);

alter table playlist
add foreign key (user_id) references "user"(id);

alter table "user"
add column profile_pic varchar (255),
add column channel_name varchar (255),
add column about varchar (255)

alter table playlist
rename column user_profile_id to user_id;

alter table user_profile_video
rename column user_profile_id to user_id;

insert into user_profile
(profile_pic, channel_name, about, user_id)
values
(1, 1, 1, 1)

insert into user_profile_video
(user_profile_id, video_id)
values
(1, 1)

SELECT video_url 
FROM "video"
WHERE "id"=1;

SELECT id, video_url 
FROM "video"

select *
from playlist;

alter table video
ADD video_title varchar(255);

alter table video
rename column video_stats to published_at;

alter table video
rename column video_subscribers to subscription_count;

alter table video
rename column video_author to channel_title;

alter table video
rename column video_time to time;
