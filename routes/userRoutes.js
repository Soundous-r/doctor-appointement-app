const express = require('express');
const { loginController, registerController, authController ,applyDoctorController, getAllNotificationController,deleteAllNotificationController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

//router object
const router = express.Router();    

//routes
//login or post 
router.post('/login', loginController);
//register or post
router.post('/register', registerController);

//auth or post
router.post("/getUserData", authMiddleware, authController);
module.exports = router;
//apply doctor or post
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification doctor or post
router.post("/get-all-notification", authMiddleware, getAllNotificationController);


//Notification doctor or post
router.post("/delete-all-notification", authMiddleware,deleteAllNotificationController);
module.exports = router;