const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');



// menu endpoints functions
const { getMenu } = require('./endpoints/menu/getMenu');
const { insertMenu } = require('./endpoints/menu/insertMenu');
const { deleteMenu } = require('./endpoints/menu/deleteMenu');

// ourTeam endpoints functions
const { getOurTeam } = require('./endpoints/team_members/getOurTeam');
const { postOurTeam } = require('./endpoints/team_members/postOurTeam');
const { deleteOurTeam } = require('./endpoints/team_members/deleteOurTeam');

// blogs' endpoints functions
const { getBlog } = require('./endpoints/blogs/getBlog');
const { insertBlog } = require('./endpoints/blogs/insertBlog');
const { deleteBlog } = require('./endpoints/blogs/deleteBlog');

// authentication endpoints functions
const { loginUser } = require('./endpoints/user/loginUser');
const { registerUserAdmin } = require('./endpoints/user/registerUserAdmin');
const { verifyUserToken } = require('./endpoints/user/verifyUserToken');

try {
    mongoose.connect('mongodb+srv://mohamedmahrous581:asabry11@cluster0.47xea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Connected to DB');
} catch (e) {
    console.error('Failed to connect to MongoDB')
}

const app = express()
const port = 3001;
app.use(cors({
  exposedHeaders: ['X-Auth-Token']
}));

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Menu
app.get('/menu', getMenu);
app.post('/menu', insertMenu);
app.delete('/menu', deleteMenu);


// Team members
app.get('/OurTeam', getOurTeam);
app.post('/OurTeam', postOurTeam);
app.delete('/OurTeam/:id', deleteOurTeam);

// Blogs
app.get('/blogs' , getBlog);
app.post('/blogs' , insertBlog)
app.delete('/blogs', deleteBlog)

// Authentication
app.post("/api/login", loginUser);
app.post("/api/register", registerUserAdmin);
app.post("/api/verifyToken", verifyUserToken);


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
