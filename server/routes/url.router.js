const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/*
 * GET route
 */
router.get("/", (req, res) => {
  // FINISH GET route code here: IN PROGRESS
  // COMES FROM URL.SAGA.JS
  const sqlQuery = `
  SELECT * FROM "video"
  WHERE "user_id"=$1;
  `

  const sqlValues = [userId];

  pool
    .query(sqlQuery, sqlValues)
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch( dbErr => {
      console.log('GET /api/url fail:', dbErr);
    })
});

/*
 * POST route template
 */
router.post("/", (req, res) => {
  // FINISH POST route code here: FINISHED
  const url = req.body.videoUrl;
  console.log("URL:", url);

  const sqlText = `
  INSERT INTO "video"
  ("video_url")
  VALUES
  ($1)
  `;

  const sqlValues = [url];

  pool
    .query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
      console.log('dbRes:');
    })
    .catch((dbErr) => {
      console.log("error posting to DB", dbErr);
      res.sendStatus(500);
    });

});

module.exports = router;