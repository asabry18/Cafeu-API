const Team = require('../../models/Teams');

const deleteOurTeam = async (req, res) => {
    try {
        //extract id from pramaters 
        const { id } = req.params; 

        //find the id and delete it 
        const deletedMember = await Team.findByIdAndDelete(id);

        res.json({ message: 'Team member deleted successfully', deletedMember });
    } catch (error) {
        console.error('Error fetching team members:', error);
    }
};

module.exports = { deleteOurTeam }


