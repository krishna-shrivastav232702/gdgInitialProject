import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
    {
        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Events",
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        registeredAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true
    }
)

const Registration = mongoose.model("Registration",registrationSchema);

export default Registration;