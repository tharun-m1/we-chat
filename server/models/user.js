const mongoose = require("mongoose");
const { UserName, usernameSchema } = require("./username");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: usernameSchema,
      ref: "UserName",
      default: null,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", UserSchema);
module.exports = User;
