import {getAllPosts ,getPostById}from "../controllers/posts.ctrl.js";
import express from "express"
const router = express()

router.get('/posts',async (req,res)=>{
    res.send(await getAllPosts(req,res));
})

router.get('/posts:id',async(req,res)=>{
    res.send(await getPostById(req,res))
})


export default router;