const Team = require('../../models/Teams');

const postOurTeam = async (req, res) => {
    try {
        // Create a new team member with the data from the request body
        const { 
            name,
            position,
            imageUrl,
            description
        } = req.body;
        
        //create object from the Team schema in the database
        const newMember = new Team({ name, position, imageUrl, description });

        // Save the new member to the database
        await newMember.save();
        res.json({ message: 'Team member added successfully', newMember });
    } catch (error) {
        console.error('Error adding team member:', error);
    }
};

module.exports = { postOurTeam };
