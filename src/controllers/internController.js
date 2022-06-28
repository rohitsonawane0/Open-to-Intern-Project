const InternModel = require("../models/internModel.js");
const CollegeModel = require("../models/collegeModel");

exports.createIntern = async function (req, res) {
  const { name, email, mobile, collegeName } = req.body
  const existCollege = (await CollegeModel.find({ name: collegeName }).select({ _id: 1 }))
  console.log(existCollege["_id"]);
  res.status(201).send({ status: true, mgs: "data" });
};
