import { Router } from "express";
import { getAllDados } from "../controllers/controller.js";

const rota = Router();

rota.get('/', getAllDados)

export default rota;