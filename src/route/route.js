const express = require("express");
const route = express.Router();
const internController = require("../controller/internController");

route.get("/", function (req, res) {
  res.status(200).send("testing api");
});

route.post("/functionup/interns", internController.createIntern);

module.exports = route;
