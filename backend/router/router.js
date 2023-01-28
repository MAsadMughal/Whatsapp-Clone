const express = require('express');
const { createConversation, getConversation, sendMessage, getMessages } = require('../controllers/ChatControllers');
const { createUser, loginUser, logoutUser, getUserDetails, updatePassword, forgotPassword, resetPassword, googleUser, getGUserDetails, googleUserLogin, getAllUsers } = require('../controllers/UserControllers');
const { isUserAuthenticated, isGUserAuthenticated } = require('../middlewares/Auth');
const router = express.Router();

//User Routes
router.post('/Signup', createUser);
router.get('/allUsers', isGUserAuthenticated, getAllUsers);
router.post('/googleUser', googleUserLogin);
router.post('/Login', loginUser);
router.get('/Logout', logoutUser);
router.put('/updatePassword', isUserAuthenticated, updatePassword);
router.get('/me', isUserAuthenticated, getUserDetails);
router.get('/Gme', isGUserAuthenticated, getGUserDetails);
router.get('/forgot', forgotPassword);
router.get('/reset/:token', resetPassword);


//Conversation routes
router.post('/createConversation', isGUserAuthenticated, createConversation);
router.get('/getConversation/:id', isGUserAuthenticated, getConversation);
router.post('/newMessage', isGUserAuthenticated, sendMessage);
router.get('/getMessages/:id', isGUserAuthenticated, getMessages);

module.exports = router;