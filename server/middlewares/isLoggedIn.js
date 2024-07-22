const errorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const isLoggedIn = async (req, res, next) => {
  try {
    const we_chat_token = req.cookies.we_chat_token;
    console.log(we_chat_token);
    if (!we_chat_token) {
      return next(errorHandler(401, "UNAUTHORIZED"));
    }
    const { userId } = jwt.verify(we_chat_token, process.env.JWT_SECRET);
    console.log(userId);
    req.user_id = userId;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isLoggedIn;
