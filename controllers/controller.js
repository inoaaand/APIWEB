import bd from "./firebase.js";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';

const usersRef = collection(bd, "usuario");

export const listarUsuario = async (req, res) => {
    try {
        const snapshot = await getDocs(usersRef);
        const usuario = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(usuario);
    } catch {
        res.sendStatus(500);
    }
};

export const criarUsuario = async (req, res) => {
    try {
        const dados = req.body;
        const novoDoc = await addDoc(usersRef, dados);
        res.status(201).json({ id: novoDoc.id, ...dados });
    } catch {
        res.sendStatus(500);
    }
};


export const buscarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const ref = doc(bd, "usuario", id);
        const docSnap = await getDoc(ref);

        if (!docSnap.exists()) {
            return res.sendStatus(404);
        }

        res.status(200).json(docSnap.data());
    } catch {
        res.sendStatus(500);
    }
};


export const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const dados = req.body;
        const ref = doc(bd, "usuario", id);
        await updateDoc(ref, dados);
        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
};

export const deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const ref = doc(bd, "usuario", id);
        await deleteDoc(ref);
        res.sendStatus(200);
    } catch {
        res.sendStatus(500);
    }
};
