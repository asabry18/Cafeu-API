const Testimonial = require("../../models/Testimonial");

const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from request parameters
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting testimonial" });
  }
};

module.exports = { deleteTestimonial };
