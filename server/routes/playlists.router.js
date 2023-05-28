const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// POST route template
router.post("/", (req, res) => {
  const playlist = req.body;
  // console.log("PLAYLIST:", playlist); WORKS
  const user = req.user;
  // console.log("USER:", user.id);

  // If you're already logged in, you can use req.user.id to insert as data.
  // console.log("userID:", req.user.id);

  const sqlText = `
  INSERT INTO "playlist"
  ("playlist_name", "user_id")
  VALUES
  ($1, $2)
  `;

  // Will insert values into sql
  const sqlValues = [playlist.name, user.id];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log("error posting playlist to DB", dbErr);
      res.sendStatus(500);
    });
});

// GET ROUTE
router.get("/", (req, res) => {
  // COMES FROM PLAYLISTS.SAGA.JS

  const sqlQuery = `
  SELECT id, playlist_name
  FROM "playlist"
  `;

  pool
    .query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
      console.log("dbRes.rows:", dbRes.rows);
    })
    .catch((dbErr) => {
      console.log("GET /api/playlists fail:", dbErr);
    });
});

module.exports = router;
