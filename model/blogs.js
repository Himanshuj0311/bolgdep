const mongoose=require("mongoose");
 //User schema;

 const BlogSchema=mongoose.Schema({
    title:{type:String,required:true,unique:true},
    blogId:{type:String,required:true},
    createdAt:{type:String,required:true}
 },{versionKey:false})
 const Blog=mongoose.model("product",BlogSchema)

 module.exports={Blog}