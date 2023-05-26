const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// POST route template
router.post("/", (req, res) => {
  const playlist = req.body.playlist;
  // console.log("PLAYLIST:", playlist); WORKS

  const sqlText = ``;
});

module.exports = router;