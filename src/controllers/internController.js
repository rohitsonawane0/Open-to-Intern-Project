const InternModel = require("../models/internModel.js");
const CollegeModel = require("../models/collegeModel");

exports.createIntern = async function (req, res) {
  const { name, email, mobile, collegeName } = req.body
  const existCollege = await CollegeModel.find({ name: collegeName })
  console.log(existCollege)
  const requireId = existCollege[0]['_id'].toString()
  const savedData = await InternModel.create({ name, email, mobile, collegeId: requireId })
  const internId = savedData._id.toString()
  const updateToCollege = await CollegeModel.findByIdAndUpdate(requireId, { $addToSet: { interns: internId } })
  console.log(updateToCollege)
  console.log(internId)
  res.status(201).send({ status: true, mgs: savedData });
};
