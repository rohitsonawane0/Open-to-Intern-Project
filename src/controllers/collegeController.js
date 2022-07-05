const CollegeModel = require('../models/collegeModel.js');
const InternModel = require('../models/internModel.js');

exports.createCollege = async function (req, res) {
    try {
        const data = req.body
        const savedData = await CollegeModel.create(data)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(201).send({ status: true, msg: savedData })
    } catch (error) {
        res.status(500).send({ status: false, mgs: error.message });
    }
}


exports.getCollegeDetails = async function (req, res) {
    try {
        const name = req.query.collegeName
        if (!req.query.collegeName) return res.status(400).send({ status: false, msg: "Query cannot be empty" })
        let college = await CollegeModel.find({ name: name, isDeleted: false }).select({ _id: 0, isDeleted: 0, __v: 0 })
        if (college.length == 0 || college.length == null || college == undefined) return res.status(404).send({ status: false, msg: "College not found" })
        let collegeId = await CollegeModel.find({ name: name, isDeleted: false }).select({ isDeleted: 0, __v: 0 })
        if (collegeId.length == 0 || collegeId == null || collegeId == undefined) return res.status(404).send({ status: false, msg: "College not found" })
        const internData = collegeId[0]["_id"].toString()
        let intern = await InternModel.find({ collegeId: internData, isDeleted: false }).select({ collegeId: 0, isDeleted: 0, __v: 0 })
        college = college[0].toObject()
        if (intern.length == 0 || intern.length == null || intern.length == undefined) {
            college.interns = "No interns for this college"
        } else {
            college.interns = intern
        }
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.status(200).send({ status: true, data: college })
    } catch (error) {
        res.status(500).send({ status: false, mgs: error.message });

    }
}
