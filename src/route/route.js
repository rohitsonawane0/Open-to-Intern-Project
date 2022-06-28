const express = require("express");
const route = express.Router();

route.get("/", function (res, req) {
  res.status(200).send("It's working");
});

module.exports = router;
