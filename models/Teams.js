const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OurTeamSchema = new Schema({
	name: String,
	position: String,
    imageUrl: String,
    description: String
});

const Team = mongoose.model("Team", OurTeamSchema);

module.exports = Team;