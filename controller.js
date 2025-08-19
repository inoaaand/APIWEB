import bd from "../bd/firebase-admin.js";  
const usersRef = bd.collection("users");

export const createUser = async (req, res) => {
    
    const { nome, sobrenome, email, telefone } = req.body;
    const novoUsuario = { nome, sobrenome, email, telefone };
    const docRef = await usersRef.add(novoUsuario);

};

export const getUsers = async (req, res) => {
 
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);

};
