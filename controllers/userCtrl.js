const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//register callback

const registerController =async(req,res)=>{
    try{
const existingUser =await User.findOne({email:req.body.email});
if(existingUser){
    return res.status(200).send({success:false,message:'User already exists'});
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    console.log(newUser);
    res.status(201).send({success:true,message:'User registered successfully'});
    }
    catch(error){
        console.log(error);
        res.status(500).send({success:false,message:`Server error ${error.message}`});
    }
}


//login callback
const loginController =async (req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(200).send({success:false,message:'User not found'});
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        
        if(!isMatch){
            return res.status(200).send({success:false,message:'Invalid email or passsword'});
        }
        const token =jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
        res.status(200).send({success:true,message:'Login successful',token});
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false,message:`error in login ${error.message}`});
    }
}

const  authController = async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.body.userId });
      if (!user) {
        return res.status(200).send({
          message: "user not found",
          success: false,
        });
      } else {
        res.status(200).send({
          success: true,
          data: {
            name: user.name,
            email: user.email,
          },
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error,
      });
    }
  };
module.exports = {loginController, registerController,authController}