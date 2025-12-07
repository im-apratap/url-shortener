import express from "express"
import cors from "cors"
import {nanoid} from "nanoid"
import {ENV} from "./config/env.js"

const app = express()

const PORT = ENV.PORT

app.post("/api/create",(req,res)=>{
    const {url} = req.body
    console.log(url)    
    res.send(nanoid(7))
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const startServer = ()=> {
    app.listen(PORT,()=>{
        console.log(`App is listening on PORT ${PORT}`)
    })
}

startServer()