const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.login = (req, res, next) => {};

exports.signup = async (req, res, next) => {
  //Sucess 201 OK
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: "error",
        message: errors.array()[0].msg,
      });
    }
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (err) {
    //TODO: Handle Error
  }
};
