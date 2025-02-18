const Contact = require("../../models/Contact");

const insertContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body; // Server-side validation: Ensure that all fields are provided

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    } // Create a new contact message

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error("Error inserting contact:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { insertContact };
