import Events from "../models/events.model.js";
import User from "../models/user.model.js"
import uploadOnCloudinary from "../utils/cloudinary.js";
import fs from "fs";

export const getEvents = async (req, res) => {
    try {
        const events = await Events.find();
        console.log(events);
        res.status(200).json(events);
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
}

export const getParticularEvent = async (req, res) => {
    try {
        const event = await Events.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: "Event not found" })
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const newEvent = async (req, res) => {
    try {
        const { title, date, time, location, description, createdBy } = req.body;
        // console.log(req.body);
        // console.log(req.file);
        const user = await User.findOne({ uid: createdBy })
        const userId = user._id;
        const localFilePath = req.file.path;
        const cloudinaryResponse = await uploadOnCloudinary(localFilePath);
        if (!cloudinaryResponse) {
            return res.status(500).json({ message: "Image upload to cloudinary failed" });
        }


        const imageUrl = cloudinaryResponse.secure_url;
        const event = new Events({
            title,
            date,
            time,
            location,
            description,
            imageUrl,
            createdBy: userId
        });
        if (!event) {
            return res.status(404).json({ message: "Few Event details are missing" });
        }
        await event.save();
        console.log("Event Saved")
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
            console.log(`Deleted local Filepath:${localFilePath}`);
        }

        res.status(201).json({ message: "Event created Successfully" });

    } catch (error) {
        res.status(402).json({ message: "Sorry!,Event not created" });
    }
}


export const updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const { title, date, time, location, description, createdBy } = req.body;


        let imageUrl;
        if (req.file) {
            const localFilePath = req.file.path;
            const cloudinaryResponse = await uploadOnCloudinary(localFilePath);

            if (!cloudinaryResponse) {
                return res.status(500).json({ message: "Image upload to Cloudinary failed" });
            }

            imageUrl = cloudinaryResponse.secure_url;


            if (fs.existsSync(localFilePath)) {
                fs.unlinkSync(localFilePath);
            }
        }

        const eventToUpdate = await Events.findById(eventId);
        if (!eventToUpdate) {
            return res.status(404).json({ message: "Event not found" });
        }


        const updateUser = await User.findOne({ uid: createdBy });
        if (!updateUser) {
            return res.status(404).json({ message: "User not found" });
        }


        const updatedEvent = await Events.findByIdAndUpdate(
            eventId,
            {
                title,
                date,
                time,
                location,
                description,
                createdBy: updateUser,
                imageUrl: imageUrl || eventToUpdate.imageUrl,
            },
            { new: true, runValidators: true }
        );

        if (!updatedEvent) {
            return res.status(400).json({ message: "Failed to update the event" });
        }

        res.status(200).json(updatedEvent);

    } catch (error) {
        res.status(502).json({ message: error.message });
    }
};


export const deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Events.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        await Events.findByIdAndDelete(eventId);
        console.log("Event deleted");

        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}