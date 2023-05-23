const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  const query = `SELECT * FROM "video";`,
  pool
    .query(query)
    .then(result => )
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
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