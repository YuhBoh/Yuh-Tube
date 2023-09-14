const express = require("express");
const pool = require("../modules/pool");
 const router = express.Router();
require("dotenv").config();
const axios = require("axios");

router.get("/", (req, res) => {
  const search = req.query.search;

  const searchUrl = `${process.env.SEARCH_URL}part=${process.env.SEARCH_PART}&key=${process.env.KEY}&maxResults=${process.env.MAX_RESULTS}&q=${search}`;
  // that means this: process.env.SEARCH_URL is undefined
  // and this is undefined: process.env.SEARCH_PART
  // etc etc

// That's step four of the process:
// Okay, there’s basically four steps:

// Make sure the app is set up to talk to the database once deployed.

// Deploy the app to heroku

// Deploy the database (to render.com or neon.tech)

// Set environment variables (secrets) in heroku <- we found the problem


// process.env.SEARCH_URL means: go to my computers environment, and find the environment variable called: SEARCH_URL

// on your computer, you probably set environment variables (ultra secret secrets) in a .env file
// we keep that super secret, and out of git (you don't want to share the secrets!)

// So, when we push to heroku, it doesn't have our secrets!

// You need to make a list of anything you have in code thats process.env.something
// VIDEOS_URL
// VIDEOS_PART
// CHANNELS_URL,
// etc..

// grab those variable names, and their values (the values are likely in your .env file)
// Do you have a .env file?

// Your good :)
// Some of those super secret secrets aren't that secret, like VIDEOS_URL
// Some of them (any passwords or API keys) are really top secret

  const videosUrl = `${process.env.VIDEOS_URL}part=${process.env.VIDEOS_PART}&key=${process.env.KEY}&chart=${process.env.VIDEOS_CHART}&regionCode=${process.env.REGION_CODE}&maxResults=${process.env.MAX_RESULTS}&videoCategoryId=${process.env.MOST_POPULAR_CATEGORY_ID}`;

  axios
    // you try searching this url: searchUrl
    // that's showing up as undefined in your deploy version
    // or, more accuratly, the pieces are showing up as undefined
    .get(searchUrl)
    .then((response) => {
      const dataArray = response.data.items;
      const videoIds = dataArray.map((item) => item.id.videoId);
      const channelIds = dataArray.map((item) => item.snippet.channelId);

      axios
        .all([
          axios.get(
            `${process.env.CHANNELS_URL}part=${process.env.CHANNELS_PART}&key=${
              process.env.KEY
            }&id=${channelIds.join(",")}`
          ),
          axios.get(
            `${process.env.VIDEOS_URL}part=${process.env.VIDEOS_PART}&key=${
              process.env.KEY
            }&id=${videoIds.join(",")}`
          ),
        ])
        .then(
          axios.spread((channelResponse, videoResponse) => {
            const channelDataArray = channelResponse.data.items;
            const videoDataArray = videoResponse.data.items;

            const channelDetails = {}; // Object to store channelId: channel details mappings
            const videoDetails = {}; // Object to store videoId: video details mappings

            channelDataArray.forEach((channel) => {
              channelDetails[channel.id] = {
                publishedAt: channel.snippet.publishedAt,
                subscriberCount: channel.statistics.subscriberCount,
                videoCount: channel.statistics.videoCount,
                channelThumbnail: channel.snippet.thumbnails.default.url,
              };
            });

            videoDataArray.forEach((video) => {
              videoDetails[video.id] = {
                duration: video.contentDetails.duration,
              };
              console.log('DURATION:', videoDetails)
            });

            const videosWithDetails = dataArray.map((video) => ({
              ...video,
              channelThumbnail:
                channelDetails[video.snippet.channelId].channelThumbnail,
              publishedAt: channelDetails[video.snippet.channelId].publishedAt,
              subscriberCount:
                channelDetails[video.snippet.channelId].subscriberCount,
              videoCount: channelDetails[video.snippet.channelId].videoCount,
              duration: videoDetails[video.id.videoId].duration,
            }));

            res.send({ dataArray: videosWithDetails });
          })
        )
        .catch((error) => {
          console.log("API ERROR:", error);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
