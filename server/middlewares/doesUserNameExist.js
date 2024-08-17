const { UserName } = require("../models/username");
const errorHandler = require("../utils/errorHandler");

// This middleware is for [when adding contact ]
const doesUserNameExist = async (req, res, next) => {
  try {
    const { username } = req.body;
    const userFound = await UserName.findOne({ username });
    if (!userFound) {
      return next(errorHandler(404, "User doesn't Exist!"));
    }
    const contact_id = userFound.user_id;
    req.contact_id = contact_id;
    next();
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = doesUserNameExist;
