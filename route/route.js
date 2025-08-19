import { Router } from "express";
import { createUser, getUsers } from "../controllers/controller.js";

const rota = Router();

rota.post("/", createUser);
rota.get("/", getUsers);

export default rota;
