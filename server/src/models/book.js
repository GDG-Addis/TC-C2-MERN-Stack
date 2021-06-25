const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
/**
 * Schema for storing book
 *  * Name - book name
 *  * Description - book description
 *  * Image - book cover photo
 *  * Author - book author/creator
 *  * Authors - book contributors
 *  * Content - book content
 */
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
      default: "default.png",
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    content: {
      type: Object,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

const Book = mongoose.model("Book", schema);

module.exports = Book;
