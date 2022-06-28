const express = require("express");
const router = express.Router();
const InternValidation = require('../validation/internValidations')
const collegeValidation = require('../validation/collegeValidations')

const CollegeController = require('../controllers/collegeController.js');
const InternController = require('../controllers/internController.js');


router.get("/", function (req, res) {
  res.status(200).send("testing api");
});

router.post('/functionup/colleges', collegeValidation.validationCollege, CollegeController.createCollege)
router.post('/functionup/interns', InternValidation.validationInter, InternController.createIntern)
//collegeValidation.validationCollege,
module.exports = router;
