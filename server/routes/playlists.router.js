const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// POST route template
router.post("/", (req, res) => {
  const playlistName = req.body.playlist;
  // console.log("PLAYLIST:", playlist); WORKS

  const sqlText = `
  INSERT INTO "playlist"
  ("playlist_name")
  VALUES
  ($1)
  `;

  const sqlValues = [playlistName];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log("error posting playlist to DB", dbErr);
      res.sendStatus(500);
    })
  // const sqlValues = [playlistName, userProfileId];
});

module.exports = router;