const { Router } = require("express")
const {authorization}=require("../middleware/autherization");
const {Blog}=require("../model/blogs");
const blogRouter=Router();

blogRouter.get("/all",async(req,res)=>{
    try {
        const blog=await Blog.find()
        res.send({blog});
    } catch (error) {
        return res.status(500).send({msg:error.message});
    }
})

blogRouter.post("/addblogs",authorization(["User","Moderator"]),async(req,res)=>{
    try {
        const blog=new Blog(req.body);
        await blog.save();
        res.send({msg:"blog saved"})
        
    } catch (error) {
        return res.status(500).send({msg:error.message});
    }
})

blogRouter.post("/deleteblogs/:blogId",authorization(["Moderator"]),async(req,res)=>{
    try {
        const {blogId}=req.params;
        const blog=new blog.find(blogId);
       if(blog.bolgId==req.body.userId)
       {
        await blog.deleteOne({blogId})
        res.send({msg:"blog deleted"})}
        else{
            res.status(403).send({msg:"Not Authorized"})
        }
        
    } catch (error) {
        return res.status(500).send({msg:error.message});
    }
})

module.exports={blogRouter}

