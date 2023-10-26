
const mongoose = require("mongoose");

const Like = require("../Model/LikeModel")
const Comment = require("../Model/CommentModel")
const Post=require("../Model/PostModel")

exports.CreateComment = async (req, res) => {

    try {
        // fetch data from comment body  
        const { user, body, post } = req.body;
        console.log("print post")
        console.log(post)

        // 2nd way to save data 
        const commentss = new Comment({ user, body, post })
        // save new comment in the database
        // const savedComment = await Comment.create({user, body, post});
        const savedComment=await commentss.save();

        // find the Post by id and update inside the comment
        const UpdatedComment = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
                                .populate("comments")
                                .exec();

                                res.status(200).json({
                                    success:true,
                                    post:UpdatedComment,
                                    message:"Comment successfulley updated or created"
                                })

    } catch (error) {
res.status(500).json({
    success:false,
    post:"server problem",
    message:error.message
})
    }
}