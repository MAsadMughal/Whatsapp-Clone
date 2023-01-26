const express = require('express');
const { createConversation } = require('../controllers/ChatControllers');
const { createUser, loginUser, logoutUser, getUserDetails, updatePassword, forgotPassword, resetPassword, googleUser, getGUserDetails, googleUserLogin, getAllUsers } = require('../controllers/UserControllers');
const { isUserAuthenticated, isGUserAuthenticated } = require('../middlewares/Auth');
const router = express.Router();

//User Routes
router.post('/Signup', createUser);
router.get('/allUsers',isGUserAuthenticated, getAllUsers);
router.post('/googleUser', googleUserLogin);
router.post('/Login', loginUser);
router.get('/Logout', logoutUser);
router.put('/updatePassword', isUserAuthenticated, updatePassword);
router.get('/me', isUserAuthenticated, getUserDetails);
router.get('/Gme', isGUserAuthenticated, getGUserDetails);
router.get('/forgot', forgotPassword);
router.get('/reset/:token', resetPassword);


//Conversation routes
router.post('/createConversation', createConversation);

module.exports = router;