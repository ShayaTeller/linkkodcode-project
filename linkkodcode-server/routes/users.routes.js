import express from "express";

export const router = express();

router.post('/login',async(req,res)=>{
    return res.status(403).end('no body')
})




