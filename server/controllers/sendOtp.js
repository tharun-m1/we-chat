const { main } = require("../services/mailer");
const randomstring = require("randomstring");
const Otp = require("../models/otp");
const sendOtp = async (req, res, next) => {
  try {
    const { email } = req.body;
    const token = email;
    let otp;
    const alreadyExist = await Otp.findOne({ token });
    if (alreadyExist) {
      await Otp.findByIdAndDelete({ _id: alreadyExist._id });
    }
    otp = randomstring.generate({
      length: 6,
      charset: "numeric",
    });

    await Otp.create({ otp, token });
    await main(email, otp);
    return res.status(200).json({
      id: email,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendOtp };
