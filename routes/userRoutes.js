const express = require('express');
const { loginController, registerController, authController } = require('../controllers/userCtrl');
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