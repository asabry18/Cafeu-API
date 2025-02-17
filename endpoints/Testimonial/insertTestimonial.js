const Testimonial = require("../../models/Testimonial");

const insertTestimonial = async (req, res) => {
  try {
    // Ensure the request body is an array and has at least one testimonial
    if (!Array.isArray(req.body) || req.body.length === 0) {
      return res
        .status(400)
        .json({ error: "Request body must be a non-empty array" });
    }

    // Validate each testimonial before insertion
    for (const item of req.body) {
      if (
        !item.name ||
        !item.nationality ||
        !item.image ||
        !item.text ||
        !item.rating
      ) {
        return res
          .status(400)
          .json({ error: "All fields are required for each testimonial" });
      }
    }

    // Insert all testimonials at once
    const testimonials = await Testimonial.insertMany(req.body);

    res
      .status(201)
      .json({ message: "Testimonials have been saved", testimonials });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error saving testimonials", details: error.message });
  }
};

module.exports = { insertTestimonial };
