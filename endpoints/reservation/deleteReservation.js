const reservations = require("../../models/reservation");

const deleteReservation = async (req, res) => {
  const reservationId = req.params.id;

  if (!reservationId) {
    return res.status(400).json({ message: "Reservation ID is required." });
  }

  try {
    const reservation = await reservations.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found." });
    }

    await reservations.findByIdAndDelete(reservationId);
    res.status(200).json({ message: "Reservation has been deleted successfully." });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    res.status(500).json({ message: "Failed to delete reservation. Please try again." });
  }
};

module.exports = { deleteReservation };