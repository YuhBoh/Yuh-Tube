const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
require("dotenv").config();
const axios = require("axios");

router.get("/", (req, res) => {
  const search = req.query.search;

  const searchUrl = `${process.env.SEARCH_URL}part=${process.env.SEARCH_PART}&key=${process.env.KEY}&maxResults=${process.env.MAX_RESULTS}&q=${search}`;

  const videosUrl = `${process.env.VIDEOS_URL}part=${process.env.VIDEOS_PART}&key=${process.env.KEY}&chart=${process.env.VIDEOS_CHART}&regionCode=${process.env.REGION_CODE}&maxResults=${process.env.MAX_RESULTS}&videoCategoryId=${process.env.MOST_POPULAR_CATEGORY_ID}`;


  axios
    .get(searchUrl)
    .then((response) => {
      const dataArray = response.data.items;
      const channelIds = dataArray.map((item) => item.snippet.channelId);

      axios
        .get(
          `${process.env.CHANNELS_URL}part=${process.env.CHANNELS_PART}&key=${
            process.env.KEY
          }&id=${channelIds.join(",")}`
        )
        .then((channelResponse) => {
          const channelDataArray = channelResponse.data.items;
          const channelDetails = {}; // Object to store channelId: channel details mappings

          channelDataArray.forEach((channel) => {
            channelDetails[channel.id] = {
              publishedAt: channel.snippet.publishedAt,
              subscriberCount: channel.statistics.subscriberCount,
              videoCount: channel.statistics.videoCount,
              channelThumbnail: channel.snippet.thumbnails.default.url,
            };
          });

          const videosWithDetails = dataArray.map((video) => ({
            ...video,
            channelThumbnail:
              channelDetails[video.snippet.channelId].channelThumbnail,
            publishedAt: channelDetails[video.snippet.channelId].publishedAt,
            subscriberCount:
              channelDetails[video.snippet.channelId].subscriberCount,
            videoCount: channelDetails[video.snippet.channelId].videoCount,
          }));

          res.send({ dataArray: videosWithDetails });
        })
        .catch((channelError) => {
          console.log("CHANNEL ERROR:", channelError);
          res.sendStatus(500);
        });
    })
    .catch((error) => {
      console.log("ERROR:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
