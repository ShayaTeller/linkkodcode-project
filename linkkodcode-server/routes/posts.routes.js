import {getAllPosts ,getPostById,postNewPost,deletePostBiId,updatePostById}from "../controllers/posts.ctrl.js";
import express from "express"
const router = express()

router.get('/posts',async (req,res)=>{
    res.send(await getAllPosts(req,res));
})

router.get('/posts:id',async(req,res)=>{
    res.send(await getPostById(req,res))
})

// you send in the body the new post in json
router.post('/post',async(req,res)=>{
    res.send(await postNewPost(req,res))

})

router.put('/post:id',async(req,res)=>{
        res.send(await updatePostById(req))


})

router.delete('post/:id',async(req,res)=>{
            res.send(await deletePostBiId(req))


})


export default router;