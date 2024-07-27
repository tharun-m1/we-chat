const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const isUserNameTaken = require("../middlewares/isUserNameTaken");
const {
  AddUserName,
  // UpdateUserName,
} = require("../controllers/userNameController");
const router = express.Router();

router.post("/create", isLoggedIn, isUserNameTaken, AddUserName);
// router.put("/update", isLoggedIn, UpdateUserName);

module.exports = router;
