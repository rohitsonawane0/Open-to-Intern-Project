const CollegeModel = require('../models/collegeModel')
const InternController = require('../controllers/internController')

const valid = function (str) {
    if (str === undefined || str == null) return false;
    if (typeof str == "string" && str.trim().length == 0) return false;
    return true;
};
const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
const emailValid = function (str) {
    if (str === undefined || str == null) return false;
    if (typeof str == "string" && str.trim().length == 0) return false;
    return regex.test(str);
};

const checkNumber = function (str) {
    if (typeof str == "string" && str.trim().length == 0) return 'Mobile number cannot be empty'
    // if (str.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && !(str.match(/0{5,}/))) return true
    if (str.startsWith("0") || str.startsWith("1") || str.startsWith("2") || str.startsWith("3") || str.startsWith("4")) return "Mobile number is invalid"
    if (str.length != 10) return 'Mobile number must be 10 digits'
    return true
}

exports.validationInter = async function (req, res, next) {
    try {
        const { name, email, mobile, collegeName } = req.body;
        if (!valid(name))
            return res.status(400).send({ status: false, mgs: "name must be present" });
        if (!emailValid(email))
            return res
                .status(400)
                .send({ status: false, mgs: "email must be present" });
        console.log(checkNumber(mobile))
        if (checkNumber(mobile) != true) return res
            .status(400)
            .send({ status: false, mgs: checkNumber(mobile) });
        if (!valid(collegeName)) return res
            .status(400)
            .send({ status: false, mgs: "College name must be present" })
        const existCollege = await CollegeModel.find({ name: collegeName })
        console.log(existCollege)
        if (!existCollege.length) return res
            .status(404)
            .send({ status: false, mgs: "College not found" })
        next()

    } catch (error) {
        res.status(500).send({ status: false, mgs: error.message });
    }

}

