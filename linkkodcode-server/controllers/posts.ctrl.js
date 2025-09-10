import {getPosts ,getOnePostById,addNewPost,DeletePost,uptadePost}from "../services/posts.service.js";

export async function getAllPosts(req,res){
    return await getPosts();
    
}

export async function getPostById(req,res){
    const id = req.params.id;
    return await getOnePostById(id);
}



export async function postNewPost(req,res) {
    const post = await req.body;
    console.log(post)
    if(!post) return "no body!"
        res.send( await addNewPost(post.imgurl,post.likes,post.description,post.username));
 
} 


export async function updatePostById(req) {
    const id = req.params.id;
    const update = req.body;
    console.log(id+""+ update.username)
    return await uptadePost(id,update)    
} 

export async function deletePostBiId(req) {
    const id = req.params.id;
    console.log(id)
    return await DeletePost(id);
    
} 





