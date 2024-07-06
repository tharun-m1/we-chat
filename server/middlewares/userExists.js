const User = require("../models/user");
const errorHandler = require("../utils/errorHandler");

const userExists = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(errorHandler(400, "USER_EXISTS"));
    }
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = userExists;
