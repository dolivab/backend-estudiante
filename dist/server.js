"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
//import pruebaRoutes from './routes/prueba.routes';
const carrera_routes_1 = __importDefault(require("./routes/carrera.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.connectDB)();
//app.use('/api/prueba', pruebaRoutes);
app.use('/api/carrera', carrera_routes_1.default);
app.listen(PORT, () => {
    console.log('Hola desde el servidor Express, Actualizado');
});
