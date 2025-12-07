import mongoose, { connect } from "mongoose"
import { ENV } from "./env.conifg.js"

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI)
        console.log(`DB connected successfully: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error while connecting to DB: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB