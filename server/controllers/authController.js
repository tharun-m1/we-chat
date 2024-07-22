const errorHandler = require("../utils/errorHandler");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup controller
async function SignUp(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(errorHandler(500, "All feilds are required"));
    }
    const duplicate = await User.findOne({ email });
    if (duplicate) {
      return next(errorHandler(402, "User already Exists!"));
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return next(errorHandler(400, "Invalid Email!"));
    }
    if (password.length < 8) {
      return next(errorHandler(403, "Length must be atleast 8 characters"));
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: encryptedPassword });
    return res.status(200).json({
      status: 200,
      message: "User Created",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
}

// login controller
async function Login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, { username: 1, password: 1 });
    if (!user) {
      return next(errorHandler(404, "User doesn't Exist!"));
    }
    const passMatched = await bcrypt.compare(password, user.password);
    if (!passMatched) {
      return next(errorHandler(401, "Incorrect Password!"));
    }
    const payload = {
      userId: user._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    const user_data = user.username;
    return res.status(200).json({
      status: 200,
      message: "Login Successful!",
      token,
      user_data,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
}

module.exports = { SignUp, Login };
