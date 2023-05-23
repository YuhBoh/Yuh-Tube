const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated } = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  // GET route code here
  const videoId = req.user.id;

  const sqlQuery = `
  `;
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
    })
    .catch((dbErr) => {
      console.log("error posting to DB", dbErr);
    });

});

module.exports = router;