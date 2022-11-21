const express = require("express");
const router = express.Router();
const InternValidation = require('../validation/internValidations')
const collegeValidation = require('../validation/collegeValidations')

const CollegeController = require('../controllers/collegeController.js');
const InternController = require('../controllers/internController.js');




router.post('/functionup/colleges', collegeValidation.validationCollege, CollegeController.createCollege)
router.post('/functionup/interns', InternValidation.validationInter, InternController.createIntern)
router.get("/functionup/collegeDetails", CollegeController.getCollegeDetails);
module.exports = router;
