const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsersController, getAllDoctorsController } = require('../controllers/adminCtrl');
const router = express.Router();

//get all users
router.get('/getAllUsers',authMiddleware,getAllUsersController);
//get all doctors
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController);





module.exports = router;