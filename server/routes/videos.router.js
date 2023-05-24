const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/*
 * GET route
 */
router.get("/", (req, res) => {
  // FINISH GET route code here: IN PROGRESS
  // COMES FROM URL.SAGA.JS

  // const userId = req.user.id; NOT YET
  // console.log('req.user.id:', req.user.id); NOT YET

  const sqlQuery = `
  SELECT id, video_url 
  FROM "video"
  `;

  // const sqlValues = [userId]; NOT YET

  pool
    .query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
      // console.log("dbRes.rows:", dbRes.rows); LOOK IN SERVER TERMINAL WORKS
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
  // console.log("URL:", url); LOOK IN SERVER TERMINAL WORKS

  const sqlText = `
  INSERT INTO "video"
  ("video_url")
  VALUES
  ($1)
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

module.exports = router;
