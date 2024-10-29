const blogItem = require("../../models/blog");

const insertBlog = async (req, res) => {
    // initialize new blog item
    const blog = new blogItem();

    blog.cardImageUrl = req.body.cardImageUrl
    blog.title = req.body.title
    blog.body =  req.body.body
    blog.date =  req.body.date

    // insert to DB
    blog.save();
    res.send('blog has been saved')
}

module.exports = {insertBlog}