import express from "express"
import cors from "cors"
import {nanoid} from "nanoid"
import {ENV} from "./config/env.conifg.js"
import connectDB from "./config/db.config.js"
import shortRouter from "./routes/shortUrl.route.js"

const app = express()

const PORT = ENV.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use("/",shortRouter)

const startServer = async()=> {
    try {
        await connectDB()
        app.listen(PORT,()=>{
            console.log(`App is listening on PORT ${PORT}`)
        })
    } catch (error) {
        console.error(`Error while starting server: ${error.message}`)
        process.exit(1)
    }
}

startServer()