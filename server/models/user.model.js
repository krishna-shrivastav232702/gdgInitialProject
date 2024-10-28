import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: false,
            min: 2,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        city: String,
        state: String,
        country: String,

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        }
    }, { timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User;