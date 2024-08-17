const User = require("../models/user");
const errorHandler = require("../utils/errorHandler");

const AddContact = async (req, res, next) => {
  try {
    const user_id = req.user_id; // owner id
    const contact_id = req.contact_id; // contact to be added
    const doc = await User.findOne({ _id: user_id }, { members: 1 });
    const duplicate = doc.members.indexOf(contact_id);
    if (duplicate !== -1) {
      return next(errorHandler(402, "CONTACT_EXIST"));
    }
    doc.members.push(contact_id);
    await doc.save();

    res.status(200).json({
      message: "Contact Added",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = { AddContact };
