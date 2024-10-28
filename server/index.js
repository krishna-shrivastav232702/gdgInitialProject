import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDb } from "./db/connectDb.js";
import eventRoutes from "./routers/event.route.js"
import userRoutes from "./routers/user.route.js"


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const PORT= process.env.PORT;

connectDb();

//routes

app.use("/api",eventRoutes);
app.use("/apiUser",userRoutes);

app.listen(PORT,()=>{
    console.log(`app is listening at port : ${PORT}`);
})