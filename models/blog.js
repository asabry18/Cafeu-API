const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogItemSchema = new Schema({
	cardImageUrl: String,
	title: String,
    body: String,
    date: String
});

const blogItem = mongoose.model("blogItem", blogItemSchema);
module.exports = blogItem;