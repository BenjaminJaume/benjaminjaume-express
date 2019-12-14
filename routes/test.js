var express = require("express");
var router = express.Router();
const { pool } = require("../db/config");

const getProjects = (request, response) => {
  pool.query("SELECT * FROM projects", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

router.get(getProjects);

module.exports = router;
