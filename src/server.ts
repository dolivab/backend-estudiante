import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

import pruebaRoutes from './routes/prueba.routes';
import carreraRoutes from './routes/carrera.routes';
import estudianteRoutes from './routes/estudiante.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/prueba', pruebaRoutes);
app.use('/api/carrera', carreraRoutes);
app.use('/api/estudiante', estudianteRoutes); // Asegúrate de importar las rutas de estudiante

app.listen(PORT, () => {
    console.log('Hola desde el servidor Express, Actualizado')
})

