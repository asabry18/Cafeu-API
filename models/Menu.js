const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
	name: String,
	price: Number,
	description: String,
	category: String,
	imageUrl: String
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

module.exports = MenuItem;
