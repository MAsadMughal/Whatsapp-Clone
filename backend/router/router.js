const express = require('express');
const { createUser, loginUser, logoutUser, getUserDetails, updatePassword, forgotPassword, resetPassword, googleUser, getGUserDetails, googleUserLogin } = require('../controllers/UserControllers');
const { isUserAuthenticated, isGUserAuthenticated } = require('../middlewares/Auth');
const router = express.Router();


router.post('/Signup', createUser);
router.post('/googleUser', googleUserLogin);
router.post('/Login', loginUser);
router.get('/Logout', logoutUser);
router.put('/updatePassword', isUserAuthenticated, updatePassword);
router.get('/me', isUserAuthenticated, getUserDetails);
router.get('/Gme', isGUserAuthenticated, getGUserDetails);
router.get('/forgot', forgotPassword);
router.get('/reset/:token', resetPassword);


module.exports = router;