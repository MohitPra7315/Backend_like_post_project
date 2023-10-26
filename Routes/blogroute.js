const express = require("express")
const router = express.Router();

// Import controller
const { Dummyse } = require("../Controllers/Dummayse")
const { CreateComment } = require("../Controllers/commentController")
const { CreatePost, getallposts } = require("../Controllers/postController")
const { LikePost } = require("../Controllers/likeContoller")
const{DeletelikePost} =require("../Controllers/likeContoller")
// Mapping create
router.get("/Dummy", Dummyse)
router.post("/Comments/create", CreateComment)
router.post("/Posts/create", CreatePost)
router.get("/allPosts", getallposts)
router.post("/Likes/create", LikePost)
router.post("/Likes/delete",DeletelikePost)




// export
module.exports = router;