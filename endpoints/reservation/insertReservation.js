const reservations = require("../../models/reservation");

const insertReservation= async (req, res) => {
    // initialize new reservation 
    const reservation = new reservations();

    reservation.date = req.body.date
    reservation.time = req.body.time
    reservation.name =  req.body.name
    reservation.phone =  req.body.phone
    reservation.totalPerson =  req.body.totalPerson

    // insert to DB
    reservation.save();
    res.send('reservation has been saved')
    
}

module.exports = {insertReservation}