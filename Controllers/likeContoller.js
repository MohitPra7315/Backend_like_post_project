
const Post = require("../Model/PostModel")
const Like = require("../Model/LikeModel")

exports.LikePost = async (req, res) => {

    console.log(Like)


    try {
        // fetch data from comment body  
        const { user, post } = req.body;
        console.log("print post")
        console.log(post)
        console.log(user)

        // 2nd way to save data 
        const like = new Like({ user, post })
        console.log("like new save")

        // save new comment in the database
        const savedlike = await like.save()


        // const savedComment = await Comment.create({user, body, post});
        // const savedlike = await Like.create({post, user})
        console.log(savedlike + "ho gya ")

        // find the Post by id and update inside the comment
        const UpdatedComment = await Post.findByIdAndUpdate(post, { $push: { likes: savedlike._id } }, { new: true })
            .populate("likes")
            .exec();

        res.status(200).json({
            success: true,
            post: UpdatedComment,
            message: "Comment successfulley updated or created"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            post: "server problem",
            message: error.message
        })
    }
}

exports.DeletelikePost = async (req, res) => {


    try {

        const { post, like } = req.body;
        //   deleted entery fro database
        const deletedlike = await Like.findOneAndDelete({ post: post }, { _id: like })

        console.log("deleted unlike post")
        // update inside the post like array
        const UpdatedLike = await Post.findByIdAndUpdate(post, { $pull: { likes: deletedlike._id } }, { new: true })
            .populate("likes").exec()
            console.log("updated  inside the  post")

        res.status(200).json({
            success: true,
            post: UpdatedLike,
            message: "successfully deleted updated"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            post: "deleted isseue ",
            message: error.message
        })

    }

}
