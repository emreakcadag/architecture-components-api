const express = require('express');
const router = express.Router();

router.get("/main3", async (req, res, next) => {
  res.json({
    "emreRouter": "get"
  })
});

router.post("/main4", async (req, res, next) => {
  res.json({
    "emreRouter": "post"
  })
});

module.exports = router;
