import express from 'express';
import newFirebaseconection from './firebase.js'; 
import dataRoutes from "./routes/route.js";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());

const connection = newFirebaseconection();


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', dataRoutes);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
  });