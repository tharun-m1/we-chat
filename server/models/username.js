const mongoose = require("mongoose");
const User = require("./user");
const usernameSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

const UserName = mongoose.model("UserName", usernameSchema);
module.exports = { UserName, usernameSchema };
