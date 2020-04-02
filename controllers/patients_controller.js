const Patients = require('../models/patientDetails');

module.exports.patient = function(req,res){
    return res.send('Patients');
}

module.exports.create = function(req,res){
    Patients.findOne({phonenumber : req.body.phonenumber},function(err,patient){
        if(!patient){
            Patients.create(req.body,function(err,patient){
                if(err){
                    console.log("Error in adding a patient");
                    return;
                }
                return res.redirect('/patients/details')
            })
        }else{
            return res.redirect('back');
        }
    })
}