const mongoose=require("mongoose");

CommentSchema=new mongoose.Schema({
    post:{
        // this for kis id par comment kiya h 
        type:mongoose.Schema.Types.ObjectId,
        // reference of the post model
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Comment",CommentSchema)