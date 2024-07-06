const express = require("express");
const router = express.Router();
const userExists = require("../middlewares/userExists");
const otpVerified = require("../middlewares/otpVerified");

const { SignUp, Login } = require("../controllers/authController");
const { sendOtp } = require("../controllers/sendOtp");
const VerifyOtp = require("../controllers/VerifyOtp");

router.post("/sendOtp", userExists, sendOtp);
router.post("/verifyOtp", VerifyOtp);
router.post("/signup", otpVerified, SignUp);
router.post("/login", Login);

module.exports = router;
