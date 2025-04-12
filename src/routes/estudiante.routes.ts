
// Archivo de rutas para el estudiante
import { Router } from 'express';
import { createEstudiante, getEstudiantes, getEstudiante, updateEstudiante, deleteEstudiante } from '../controllers/estudiante.controller';

const router = Router();

// Rutas para el estudiante
router.post('/', createEstudiante); // Crear un estudiante
router.get('/', getEstudiantes); // Obtener todos los estudiantes
router.get('/:idEstudiante', getEstudiante); // Obtener un estudiante por ID
router.put('/:idEstudiante', updateEstudiante); // Actualizar un estudiante
router.delete('/:idEstudiante', deleteEstudiante); // Eliminar un estudiante

export default router;
