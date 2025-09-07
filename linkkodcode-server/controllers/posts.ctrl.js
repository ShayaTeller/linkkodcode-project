import {getPosts ,getOnePostById}from "../services/posts.service.js";

export async function getAllPosts(req,res){
    return await getPosts();
    
}

export async function getPostById(req,res){
    const id = req.params.id;
    return await getOnePostById(id);
}