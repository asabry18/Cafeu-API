const express = require('express')
const mongoose = require('mongoose');
const { getMenu } = require('./endpoints/menu/getMenu');
const { getOurTeam } = require('./endpoints/team_members/getOurTeam');
const { postOurTeam } = require('./endpoints/team_members/postOurTeam');
const { deleteOurTeam } = require('./endpoints/team_members/deleteOurTeam');

try {
    mongoose.connect('mongodb+srv://mohamedmahrous581:asabry11@cluster0.47xea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to DB');
} catch (e) {
    console.error('Failed to connect to MongoDB')
}

const app = express()
const port = 3000

app.use(express.json());

// Menu
app.get('/menu', getMenu);


// Team members
app.get('/OurTeam', getOurTeam);
app.post('/OurTeam', postOurTeam);
app.delete('/OurTeam/:id', deleteOurTeam);

// Blogs

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})