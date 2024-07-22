const { UserName } = require("../models/username");
const User = require("../models/user");
const errorHandler = require("../utils/errorHandler");
const AddUserName = async (req, res, next) => {
  try {
    const { user_id, username } = req.body;
    const regex = /^[a-z0-9_]+$/;
    if (!regex.test(username)) {
      return next(errorHandler(403, "INVALID_USER_NAME"));
    }
    let user = await User.findOne({ _id: user_id }, { username: 1 });
    if (user) {
      user.username.username = username;
      user.username.user_id = user_id;
      user = await user.save();
      const doc = await UserName.findOne({ user_id: user_id });
      if (doc) {
        doc.username = username;
      } else {
        await UserName.create({ user_id, username });
      }
    } else {
      return next(errorHandler(404, "NOT_FOUND"));
    }
    res.json({
      status: "Success",
      user,
    });
  } catch (error) {
    next(error);
  }
};

// Update username
const UpdateUserName = async (req, res, next) => {
  try {
    const { user_id, username } = req.body;
    const regex = /^[a-z0-9_]+$/;

    if (!regex.test(username)) {
      return next(errorHandler(403, "INVALID_USER_NAME"));
    }
    const doc = await User.findByIdAndUpdate(
      { _id: user_id },
      { username: { ...username, username: username } }
    );
    if (doc) {
      const user_name_doc = await UserName.findOne({ user_id });
      user_name_doc.username = username;
      await user_name_doc.save();
    } else {
      return next(errorHandler(404, "NOT_FOUND"));
    }
    return res.status(200).json({
      status: 200,
      message: "UPDATED",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { AddUserName, UpdateUserName };
