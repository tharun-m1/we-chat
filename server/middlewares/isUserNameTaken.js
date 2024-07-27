const errorHandler = require("../utils/errorHandler");
const { UserName } = require("../models/username");

const isUserNameTaken = async (req, res, next) => {
  try {
    const user_id = req.user_id;
    const { username } = req.body;
    const duplicate = await UserName.findOne({ username: username });
    if (duplicate) {
      return next(errorHandler(400, "Username is Taken!"));
    }
    next();
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = isUserNameTaken;
