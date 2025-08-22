import { Router } from "express";
import { listarUsuario, criarUsuario, buscarUsuario, deletarUsuario, atualizarUsuario } from "../controllers/controller.js";

const rota = Router();

rota.get("/", listarUsuario);
rota.post("/", criarUsuario);
rota.get("/:id", buscarUsuario);
rota.put("/:id", atualizarUsuario);
rota.delete("/:id", deletarUsuario);

export default rota;
