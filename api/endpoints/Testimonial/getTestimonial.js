const Testimonial = require("../../../models/Testimonial");

const getTestimonial = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).send("Error fetching testimonials");
  }
};

module.exports = { getTestimonial };
