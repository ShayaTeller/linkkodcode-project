import express from 'express'
import { configDotenv } from 'dotenv'
import router from './routes/posts.routes.js'
import {router as userrouter  }from './routes/users.routes.js'
import { tokenVeryfayer } from './aoth/auth.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
configDotenv()

const PORT = process.env.PORT
const server = express();
// use - to janerate any body to json type
server.use(express.json());
// allowes the brouser to get data from server
server.use(cors({
    origin:'http://localhost:5173',
    credentials:"include"

}))
// given the option to take coocikes from the requests
server.use(cookieParser())



// logger of all the requests
server.use('/',(req,res,next)=>{
    console.log(req.method, req.url)
    next()
})




server.use(express.static('public'))

server.use(userrouter)
server.use('/',tokenVeryfayer)
server.use('/',router)


server.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)
})

