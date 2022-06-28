const CollegeModel = require('../models/collegeModel.js');

exports.createCollege = async function (req, res) {
    try {
        const data = req.body
        const savedData = await CollegeModel.create(data)
        res.status(200).send({ status: true, msg: savedData })
    } catch (error) {
        res.status(500).send({ status: false, mgs: error.message });
    }
}

