const CollegeModel = require('../models/collegeModel.js');

const createCollege = async function(req, res){
    try{
        const collegeData = req.body;
    if(Object.keys(collegeData).length != 0){
        const savedData = await CollegeModel.create(collegeData);
        res.status(201).send({status: true, msg: savedData})
    }else{
        cosole.log(Object.keys(collegeData))
        res.status(400).send({status: false, msg: "Body should not be remain empty"})
    }
    }
    catch(err){
        res.status(500).send({status: "SERVER ERROR", msg: err.message})
    }
}
module.exports.createCollege = createCollege; 
