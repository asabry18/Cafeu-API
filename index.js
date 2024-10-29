const express = require('express')
const mongoose = require('mongoose');
const { getMenu } = require('./endpoints/menu/getMenu');
const { getOurTeam } = require('./endpoints/team_members/getOurTeam');
const { postOurTeam } = require('./endpoints/team_members/postOurTeam');
const { deleteOurTeam } = require('./endpoints/team_members/deleteOurTeam');

// blogs' endpoints functions
const { getBlog } = require('./endpoints/blogs/getBlog');
const { insertBlog } = require('./endpoints/blogs/insertBlog');
const { deleteBlog } = require('./endpoints/blogs/deleteBlog');

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
app.get('/blogs' , getBlog);
app.post('/blogs' , insertBlog)
app.delete('/blogs', deleteBlog)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})