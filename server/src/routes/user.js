const express = require("express");
const userController = require("../controllers/user");
const userValidation = require("../middelware/validation/user");
const { verifyUser } = require("../middelware/auth");

const router = express.Router();

/**
 * Routes for handling
 *  - User login
 *  - User sign up
 *  - User search
 */

router.post("/login", userValidation.validate("LOGIN"), userController.login);

router.post(
  "/signup",
  userValidation.validate("SIGNUP"),
  userController.signup
);

router.get("/search", verifyUser, userController.serachUser);

module.exports = router;
