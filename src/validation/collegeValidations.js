const CollegeModel = require('../models/collegeModel')

const valid = function (str) {
    if (str === undefined || str == null) return false;
    if (typeof str == "string" && str.trim().length == 0) return false;
    return true;
};

exports.validationCollege = async function (req, res, next) {
    try {
        const data = req.body;
        const { name, fullName, logoLink } = data;
        if (!valid(fullName)) return res.status(400).send({ status: false, mgs: "fullName must be present" });
        if (!valid(logoLink)) return res.status(400).send({ status: false, mgs: "logoLink must be present" });
        if (!valid(name)) return res.status(400).send({ status: false, mgs: "name must be present" });
        const resultName = await CollegeModel.find({ name })
        if (resultName.length) return res.status(400).send({ status: false, mgs: "name is already taken " });
        next()
    } catch (error) {
        res.status(500).send({ status: false, mgs: error.message });
    }

}

