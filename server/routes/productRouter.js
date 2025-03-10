const express = require("express");
const ensureAuth = require("../middleware/auth");
const router = express.Router();

router.get("/",ensureAuth, (req, res) => {
  res.status(200).json([
    {
      name: "mobile",
      price: "20000",
    },
    {
      name: "tv",
      price: "15000",
    },
  ]);
});

module.exports = router;
