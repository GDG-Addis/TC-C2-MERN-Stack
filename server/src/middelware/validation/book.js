const { body, param } = require("express-validator");
const mongoose = require("mongoose");

/**
 *
 * @param {String} type
 * LOGIN | SIGNUP
 */
exports.validate = (type) => {
  switch (type) {
    case "GET":
      return [
        param("id")
          .custom((value) => {
            return mongoose.Types.ObjectId.isValid(value);
          })
          .withMessage("Invalid book ID"),
      ];
    case "CREATE":
      return [
        body("name").not().isEmpty().withMessage("Book Name is required"),
        body("description")
          .not()
          .isEmpty()
          .withMessage("Book description is required"),
      ];
    case "UPDATE":
      return [
        param("id")
          .custom((value) => {
            return mongoose.Types.ObjectId.isValid(value);
          })
          .withMessage("Invalid book ID"),
        body("name")
          .optional()
          .not()
          .isEmpty()
          .withMessage("Book Name is required"),
        body("description")
          .optional()
          .not()
          .isEmpty()
          .withMessage("Book description is required"),
      ];
    case "DELETE":
      return [
        param("id")
          .custom((value) => {
            return mongoose.Types.ObjectId.isValid(value);
          })
          .withMessage("Invalid book ID"),
      ];

    default:
      return [];
  }
};
