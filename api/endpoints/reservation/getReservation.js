const reservation = require("../../../models/reservation");

const getReservation = async (req, res) => {
  try {
    // return all reservations
    const items = await reservation.find();
    res.json(items);
  } catch (e) {
    res.send('something went wrong while retrieving reservations');
  }
}

module.exports = { getReservation };
