var express = require("express");
var router = express.Router();
const path = require("path");

router.get("/", function(req, res, next) {
  res.render("portfolio", { title: "Express" });
});

module.exports = router;
