const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// POST route template
router.post("/", (req, res) => {
  const playlist = req.body;
  // console.log("PLAYLIST:", playlist); WORKS
  const userId = req.user;

  // If you're already logged in, you can use req.user.id to insert as data.
  // console.log("userID:", req.user.id); WORKS

  const sqlText = `
  INSERT INTO "playlist"
  ("playlist_name", "user_id")
  VALUES
  ($1, $2)
  `;

  // Will insert values into sql
  const sqlValues = [
    playlist.name, 
    userId.id];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log("error posting playlist to DB", dbErr);
      res.sendStatus(500);
    })
});

module.exports = router;