const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  date: {type: Date,required: [true]},
  time: {type: String,required: [true]},
  name: {type: String,required: [true],trim: true,},
  phone: {type: String,required: [true]},
  totalPerson: {type: Number,required: [true],min: [1]}
});

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;