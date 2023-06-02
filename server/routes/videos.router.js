const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/*
 * GET route
 */
router.get("/", (req, res) => {
  // COMES FROM VIDEOS.SAGA.JS

  const sqlQuery = `
  SELECT id, video_url 
  FROM "video";
  `;

  pool
    .query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
      // console.log("dbRes.rows:", dbRes.rows);
    })
    .catch((dbErr) => {
      console.log("GET /api/videos fail:", dbErr);
    });
});

/*
 * POST route template
 */
router.post("/", (req, res) => {
  // FINISH POST route code here: FINISHED
  const video = req.body.videoUrl;
  // console.log("URL:", video); LOOK IN SERVER TERMINAL WORKS

  const sqlText = `
  INSERT INTO "video"
  ("video_url")
  VALUES
  ($1);
  `;

  const sqlValues = [video];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log("error posting to DB", dbErr);
      res.sendStatus(500);
    });
});

// DELETE ROUTE
router.delete("/:id", (req, res) => {
  const videoId = req.params.id;
  // console.log("req.params.id:", videoId); WORKS

  const sqlText = `
  DELETE FROM "video"
  WHERE id=$1;
  `;
  
  const sqlValues = [videoId];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log("error deleting from DB:", dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;
