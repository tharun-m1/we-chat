const express = require("express");
const {
  AddUserName,
  UpdateUserName,
} = require("../controllers/userNameController");
const router = express.Router();

router.post("/create", AddUserName);
router.put("/update", UpdateUserName);

module.exports = router;
