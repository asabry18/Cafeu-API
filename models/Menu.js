const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
	name: String,
	price: Number,
	category: String,
  imageUrl: String,
  rating: Number
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
