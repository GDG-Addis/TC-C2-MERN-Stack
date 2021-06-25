const express = require("express");
const bookController = require("../controllers/book");
const bookValidation = require("../middelware/validation/book");
const { verifyUser } = require("../middelware/auth");

const router = express.Router();

/**
 * Routes for handling
 *  - Get All Books
 *  - Create Book
 */
router
  .route("/")
  .get(verifyUser, bookController.getAllBooks)
  .post(
    verifyUser,
    bookController.uploadImage,
    bookValidation.validate("CREATE"),
    bookController.createBook
  );

/**
 * Routes for handling
 *  - Get Single Book
 *  - Update Book
 *  - Delete Book
 */
router
  .route("/:id")
  .get(verifyUser, bookValidation.validate("GET"), bookController.getBook)
  .patch(
    verifyUser,
    bookValidation.validate("UPDATE"),
    bookController.updateBook
  )
  .delete(
    verifyUser,
    bookValidation.validate("DELETE"),
    bookController.deleteBook
  );

module.exports = router;
