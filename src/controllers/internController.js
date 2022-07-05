const InternModel = require("../models/internModel.js");
const CollegeModel = require("../models/collegeModel");

exports.createIntern = async function (req, res) {
  try {
    const { name, email, mobile, collegeName } = req.body
    const existCollege = await CollegeModel.find({ name: collegeName, isDeleted: false })
    const requireId = existCollege[0]['_id'].toString()
    let nowObj = { name, email, mobile, collegeId: requireId }
    const savedData = await InternModel.create(nowObj)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(201).send({ status: true, mgs: savedData });
  } catch (error) {
    res.status(500).send({ status: false, mgs: error.message });
  }
};

