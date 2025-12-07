import express from "express"
import cors from "cors"
import {nanoid} from "nanoid"
import {ENV} from "./config/env.conifg.js"
import connectDB from "./config/db.config.js"
import { ShortUrl } from "./models/shortUrl.model.js"

const app = express()

const PORT = ENV.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/api/create",async(req,res)=>{
    const {url} = req.body
    const chotuUrl = nanoid(7)
    const newUrl = new ShortUrl({
        full_url: url,
        short_url: chotuUrl
    })
    await newUrl.save()
    res.send(`Short Url created successfully: ${chotuUrl}`)
})

app.get("/:shortUrl", async(req,res)=>{
    const {shortUrl} = req.params
    const url = await ShortUrl.findOne({short_url: shortUrl})
    
    if(url){
        res.redirect(url.full_url)
    }
    else{
        res.status(404).send("NOT Found")
    }
})

const startServer = async()=> {
    await connectDB()
    app.listen(PORT,()=>{
        console.log(`App is listening on PORT ${PORT}`)
    })
}

startServer()