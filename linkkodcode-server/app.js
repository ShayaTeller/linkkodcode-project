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
server.use(express.json());
server.use(cors({
    origin:'http://localhost:5173'

}))
server.use(cookieParser())
server.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)
res.send("jjjjn")})


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

