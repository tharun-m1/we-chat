const express = require("express");
const router = express.Router();

const { AddContact } = require("../controllers/contactController");
const doesUserNameExist = require("../middlewares/doesUserNameExist");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.post("/add-contact", isLoggedIn, doesUserNameExist, AddContact);

module.exports = router;
