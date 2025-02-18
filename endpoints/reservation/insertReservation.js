const reservations = require("../../models/reservation");

const insertReservation= async (req, res) => {
    // initialize new reservation 
    const reservation = new reservations();

    reservation.cardImageUrl = req.body.cardImageUrl
    reservation.title = req.body.title
    reservation.body =  req.body.body
    reservation.date =  req.body.date

    // insert to DB
    reservation.save();
    res.send('reservation has been saved')
}

module.exports = {insertReservation}