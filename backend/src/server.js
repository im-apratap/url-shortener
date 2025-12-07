import express from "express"
import cors from "cors"
import {nanoid} from "nanoid"
import {ENV} from "./config/env.conifg.js"
import connectDB from "./config/db.config.js"
import { ShortUrl } from "./models/shortUrl.model.js"
import shortRouter from "./routes/shortUrl.route.js"

const app = express()

const PORT = ENV.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use("/",shortRouter)

const startServer = async()=> {
    await connectDB()
    app.listen(PORT,()=>{
        console.log(`App is listening on PORT ${PORT}`)
    })
}

startServer()