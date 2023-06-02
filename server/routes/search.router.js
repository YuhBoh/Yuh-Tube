const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
require("dotenv").config();
const axios = require("axios"); //For backend

router.get("/", (req, res) => {
  const search = req.query.search;
  // console.log('SEARCH:', search); WORKS

  let searchUrl = `${process.env.SEARCH_URL}part=${process.env.SEARCH_PART}&key=${process.env.KEY}&maxResults=${process.env.MAX_RESULTS}&p=${search}`;

  axios
    .get(searchUrl)
    .then((response) => {
      console.log("RESPONSE:", response.data.items);

      let dataArray = response.data.items;
      res.send({ dataArray });
    })
    .catch((err) => {
      res.sendStatus(500);
    });

  const sqlText = `
  INSERT INTO "video"
  ("thumbnail", "time", "channel_pic", "channel_title", "subscription_count", "published_at", "video_title")
  VALUES
  ($1, $2, $3, $4, $5, $6);
  `;
});

module.exports = router;
