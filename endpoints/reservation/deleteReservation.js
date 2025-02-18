const reservations = require("../../models/reservation");

const deleteReservation = async(req,res)=>{
    // receive reservation id to be deleted from user
   const reservationId = req.body.id;

   try {
        // delete reservation
        const deleteRequest = await reservations.findByIdAndDelete(reservationId)
        res.send('reservation has been deleted')
   } catch (e) {
        res.send('reservation has NOT been deleted')
   }
}

module.exports = {deleteReservation}