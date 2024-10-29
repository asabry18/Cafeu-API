const Team = require('../../models/Teams');

const getOurTeam = async (req, res) => {
    try {
        const teamMembers = await Team.find();

        //to show the data 
        res.json(teamMembers); 
    } catch (error) {
        console.error('Error fetching team members:', error);
    }
};
module.exports = { getOurTeam }