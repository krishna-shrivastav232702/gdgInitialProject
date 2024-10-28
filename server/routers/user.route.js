import express from "express";
import { getUser } from "../controllers/user.controller.js";
import {createUser} from "../controllers/user.controller.js";
import {deleteUser} from "../controllers/user.controller.js"
import { getUserByRole } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user",createUser);
router.get("/user",getUser);
router.get("/user/role/:uid",getUserByRole);
router.delete("/user/:id",deleteUser);

export default router;