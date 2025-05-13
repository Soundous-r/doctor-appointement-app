const doctorModel = require("../models/doctorModel");
const User = require("../models/User");

const getAllUsersController=async(req,res)=>{
    try {
      const users= await User.find({});
      res.status(200).send({
        success:true,
        message:"All users list",
        data:users
      })  
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getting all users",
            error:error.message
        })
        
    }
}

const getAllDoctorsController=async(req,res)=>{
    try {
        const doctors= await doctorModel.find();
        res.status(200).send({
            success:true,
            message:"All doctors list",
            data:doctors
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in getting all doctors",
            error:error.message
        })
        
    }
}



module.exports={
    getAllUsersController,
    getAllDoctorsController
}