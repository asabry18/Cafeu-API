const blogItem = require("../../models/blog");

const deleteBlog = async(req,res)=>{
    // receive blog id to be deleted from user
   const blogId = req.body.id;

   try {
        // delete blog
        const deleteRequest = await blogItem.findByIdAndDelete(blogId)
        res.send('blog has been deleted')
   } catch (e) {
        res.send('blog has NOT been deleted')
   }
}

module.exports = {deleteBlog}