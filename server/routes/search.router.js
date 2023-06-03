const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
require("dotenv").config();
const axios = require("axios"); //For backend

router.get("/", (req, res) => {
  const search = req.query.search;
  // console.log('SEARCH:', search); WORKS

  let searchUrl = `${process.env.SEARCH_URL}part=${process.env.SEARCH_PART}&key=${process.env.KEY}&maxResults=${process.env.MAX_RESULTS}&q=${search}`;

  let videosUrl = `${process.env.VIDEOS_URL}part=${process.env.VIDEOS_PART}&key=${process.env.KEY}&chart=${process.env.VIDEOS_CHART}&regionCode=${process.env.REGION_CODE}&maxResults=${process.env.MAX_RESULTS}`;


  // console.log('SEARCHURL:', searchUrl); WORKS

  axios
    .get(searchUrl)
    .then((response) => {
      console.log("RESPONSE:", response.data); // Log response data

      const dataArray = response.data.items;
      const channelIds = dataArray.map((item) => item.snippet.channelId); // Extract channelIds from video items

      // Fetch channel details using channelIds
      axios
        .get(
          `${process.env.CHANNELS_URL}part=${process.env.CHANNELS_PART}&key=${
            process.env.KEY
          }&id=${channelIds.join(",")}`
        )
        .then((channelResponse) => {
          console.log("CHANNEL RESPONSE:", channelResponse.data); // Log channel response data

          // Extract thumbnails from channel response and associate with videos
          const channelDataArray = channelResponse.data.items;
          const channelThumbnails = {}; // Object to store channelId: thumbnail mappings

          channelDataArray.forEach((channel) => {
            channelThumbnails[channel.id] =
              channel.snippet.thumbnails.default.url;
          });

          // Associate thumbnails with videos
          const videosWithThumbnails = dataArray.map((video) => ({
            ...video,
            channelThumbnail: channelThumbnails[video.snippet.channelId],
          }));

          // Send videosWithThumbnails to the client
          res.send({ dataArray: videosWithThumbnails });
        })
        .catch((channelError) => {
          console.log("CHANNEL ERROR:", channelError); // Log the channel request error
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.log("ERROR:", error); // Log the video request error
      res.sendStatus(500);
    });

});

module.exports = router;
