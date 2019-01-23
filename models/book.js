const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    author: { type: String, required: true},
    description: { type: String, required: true},
    image: { type: String, Required: true},
    link: { type: String, Required: true},
    title: { type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;