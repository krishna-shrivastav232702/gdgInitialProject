import express from "express"
import {getEvents} from "../controllers/event.controller.js"
import {getParticularEvent} from "../controllers/event.controller.js"
import {newEvent,updateEvent,deleteEvent} from "../controllers/event.controller.js"
import { upload } from "../middlewares/multer.middleware.js";



const router = express.Router();

router.get("/events",getEvents);
router.get("/events/:id",getParticularEvent);
router.post("/events",upload.single("imageUrl"),newEvent);
router.put("/events/:id",upload.single("imageUrl"),updateEvent);
router.delete("/events/:id",deleteEvent);

export default router;