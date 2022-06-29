const CollegeModel = require('../models/collegeModel.js');
const internModel = require('../models/internModel.js');

exports.createCollege = async function (req, res) {
    try {
        const data = req.body
        const savedData = await CollegeModel.create(data)
        res.status(200).send({ status: true, msg: savedData })
    } catch (error) {
        res.status(500).send({ status: false, mgs: error.message });
    }
}


exports.getCollegeDetails = async function (req, res) {
    const name = req.query.collegeName
    const college = await CollegeModel.find({ name: name }).populate("interns")
    console.log(college)
    res.status(200).send({ status: true, msg: college })
}