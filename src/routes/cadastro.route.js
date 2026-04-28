import express from "express";
import { cadastroController } from "../controllers/cadastro.controller.js";

const router = express.Router();

router.post('/cadastro', cadastroController);

export default router;