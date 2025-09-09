import express from 'express'
import { configDotenv } from 'dotenv'
import router from './routes/posts.routes.js'
import {router as userrouter  }from './routes/users.routes.js'

import cors from 'cors'
configDotenv()

const PORT = process.env.PORT
const server = express();
server.use(express.json());
server.use(cors({
    origin:'http://localhost:5173'

}))

server.use('/',(req,res,next)=>{
    console.log(req.method, req.url)
    
    next()
})


server.use(express.static('public'))
server.use('/',router)
server.use(userrouter)


server.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)
})

