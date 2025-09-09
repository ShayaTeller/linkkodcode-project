import express from "express";
import {signupCtrl,loginCtrl}from '../controllers/users.ctrl.js'

export const router = express();

router.post('/login',async(req,res,next)=>{
    return await loginCtrl(req,res,next)
})

router.post('/login',async(req,res)=>{
    res.status(200).send("hello")
})

router.post('/signup',async(req,res)=>{
    res.send( await signupCtrl(req,res));
})

router.use('auth',auth);




