const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  // Optionally, you can track when the testimonial was created:
  date: {
    type: Date,
    default: Date.now,
  },
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
