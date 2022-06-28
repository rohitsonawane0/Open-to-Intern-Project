const express = require("express");
const router = express.Router();

const CollegeController = require('../controllers/collegeController.js');
const InternController = require('../controllers/internController.js');

router.get("/", function (req, res) {
  res.status(200).send("testing api");
});

router.post('/functionup/colleges', CollegeController.createCollege )
router.post('/functionup/interns', InternController.createIntern )

module.exports = router;
