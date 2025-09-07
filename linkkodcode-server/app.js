import express from 'express'
import { configDotenv } from 'dotenv'
import router from './routes/posts.routes.js'
configDotenv()

const PORT = process.env.PORT
const server = express();
server.use(express.json());

server.use('/',(req,res,next)=>{
    console.log(req.method, req.url)
    
    next()
})


server.use(express.static('public'))

server.use('/',router)


server.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)
})

