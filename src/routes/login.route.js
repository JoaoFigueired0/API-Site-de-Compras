import { Router } from "express";
import userController from "../controllers/login.controller.js";

const router = Router();

router.post('/login', userController);

export default router;