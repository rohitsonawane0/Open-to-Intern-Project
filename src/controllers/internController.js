const InternModel = require('../models/internModel.js');

const createIntern = async function(req, res){
    try{
        const internData = req.body;
    if(Object.keys(internData).length != 0){
        const savedData = await InternModel.create(internData);
        res.status(201).send({status: true, msg: savedData})
    }else{
        cosole.log(Object.keys(internData))
        res.status(400).send({status: false, msg: "Body should not be remain empty"})
    }
    }
    catch(err){
        res.status(500).send({status: "SERVER ERROR", msg: err.message})
    }
}
module.exports.createIntern = createIntern; 
