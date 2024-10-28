import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true,
        },
        date:{
            type:String,
            required:true,
            
        },
        time:{
            type:String,
            required:true,
        },
        location:{
            type:String,
            required:true,
            trim:true,
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        imageUrl:{
            type:String,
            required:true,
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        createdAt:{
            type:Date,
            default:Date.now,
        },
    },
    {
        timestamps: true
    }
)

const Events = mongoose.model("Events",eventSchema);

export default Events;