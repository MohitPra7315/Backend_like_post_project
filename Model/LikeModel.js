const mongoose=require("mongoose");

const LikeSchema=new mongoose.Schema({
    post:{
        // like kis post p kiya h 
        type:mongoose.Schema.Types.ObjectId,
        // reference bhi Post model sa aayaga 
        ref:"Post"
    },
    user:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("Like",LikeSchema)