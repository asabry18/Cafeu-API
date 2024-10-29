const blogItem = require("../../models/blog")

const getBlog = async (req, res) => {
    // get all blogs
    const blogs = await blogItem.find()    
    res.json(blogs)
}

module.exports = {getBlog}