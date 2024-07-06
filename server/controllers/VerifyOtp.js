const Otp = require("../models/otp");
const errorHandler = require("../utils/errorHandler");

const VerifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const OtpDoc = await Otp.findOne({ token: email });
    if (!OtpDoc) {
      return next(errorHandler(404, "OTP_EXPIRED"));
    }
    if (OtpDoc.used) {
      return next(errorHandler(402, "UNAUTHORIZED"));
    }
    if (OtpDoc.otp !== otp) {
      return next(errorHandler(401, "INVALID_OTP"));
    }
    OtpDoc.used = true;
    await OtpDoc.save();
    return res.status(200).json({
      message: "VERIFIED",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = VerifyOtp;
