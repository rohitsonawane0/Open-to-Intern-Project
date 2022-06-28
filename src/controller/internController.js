const internModel = require("../models/internModel");

exports.createIntern = function (req, res) {
  const data = req.body;
  console.log(data);
  res.status(200).send({ status: true, mgs: data });
};
