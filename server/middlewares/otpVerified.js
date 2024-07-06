const Otp = require("../models/otp");
const errorHandler = require("../utils/errorHandler");

const otpVerified = async (req, res, next) => {
  try {
    const { email } = req.body;
    const OtpDoc = await Otp.findOne({ token: email });
    if (!OtpDoc) {
      return next(errorHandler(404, "OTP_EXPIRED"));
    }
    if (!OtpDoc.used) {
      return next(errorHandler(402, "UNAUTHORIZED"));
    }
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = otpVerified;
