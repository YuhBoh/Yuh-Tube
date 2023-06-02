const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// POST route template
router.post("/", (req, res) => {
  const {name} = req.body;
  // console.log("PLAYLIST:", playlist); WORKS
  const {id} = req.user;
  // console.log("USER:", user.id);

  // If you're already logged in, you can use req.user.id to insert as data.
  // console.log("userID:", req.user.id);

  const sqlText = `
  INSERT INTO "playlist"
  ("playlist_name", "user_id")
  VALUES
  ($1, $2);
  `;

  // Will insert values into sql
  const sqlValues = [name, id];

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

  const sqlText = `
  SELECT id, playlist_name
  FROM "playlist"
  ORDER BY id;
  `;

  pool
    .query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
      // console.log("dbRes.rows:", dbRes.rows); WORKS
    })
    .catch((dbErr) => {
      console.log("GET /api/playlists fail:", dbErr);
    });
});

// PUT/UPDATE ROUTE
router.put("/:id", (req,res) => {
  // COMES FROM PLAYLISTS.SAGA.JS
  const playlistId = req.params.id;
  console.log("req.params.id:", playlistId);
  const playlistName = req.body.name;
  console.log('REQBODYNAME:', playlistName);

  const sqlText = `
  UPDATE "playlist"
  SET playlist_name = $1
  WHERE id = $2;
  `;

  const sqlValues = [playlistName, playlistId];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log("error deleting from DB:", dbErr);
      res.sendStatus(500);
    });
})

router.delete("/:id", (req, res) => {
  const playlistId = req.params.id;
  // console.log("req.params.id:", playlistId); WORKS

  const sqlText=`
  DELETE FROM "playlist"
  WHERE id=$1;
  `;

  const sqlValues = [playlistId];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log("error deleteing from DB:", dbErr);
    });
});

module.exports = router;
