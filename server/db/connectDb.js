import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

export const connectDb = async ()=>{
    try{
        const connection = await mongoose.connect(mongoUrl);
        console.log(`Connection Successfull : ${connection.connection.host}`)
    }catch(error){
        console.error(`Error connecting to db : ${error.message}`)
        process.exit(1);
    }
}