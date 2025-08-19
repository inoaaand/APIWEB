import { Router } from "express";
import { createUser, getUsers } from "../controllers/Controller.js";

const rota = Router();

rota.post("/", createUser);
rota.get("/", getUsers);

export default rota;
