const mongoose = require("mongoose");

const Post = require("../Model/PostModel")

exports.CreatePost = async (req, res) => {

    try {

        // fetch data from      
        const { title, body } = req.body;

        // const post = new post({
        //     title, body
        // })

        // const createdPost = await post.save();
        const createdPost = await Post.create({
            title, body
        })

        res.status(200).json({
            success: true,
            post: createdPost,
            message: "Post has been created"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            post: "error while creating",
            message: error.message
        })
    }
}




exports.getallposts=async(req,res)=>{
    try{
        // get all data of posts
        const allposts=await Post.find({}).populate("comments").exec();
        res.status(200).json({
            success: true,
            post: allposts,
            message: "all post has been come"
        })


    }catch(error){
        res.status(500).json({
            success: false,
            post: "error while getting all post",
            message: error.message
        })
    }
}