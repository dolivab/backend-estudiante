
// Generame el controlador para el estudiante

import { Request, Response } from 'express';
import { 
    srvCreateEstudiante,
    srvGetEstudiantes,
    srvGetEstudianteById,
    srvUpdateEstudiante,
    srvDeleteEstudiante
} from '../services/estudiante.service';

import { ICreateEstudiante } from '../interfaces/interfaces';

// CREAR UN ESTUDIANTE
export const createEstudiante = async (req: Request, res: Response) => {    
    try {
        const { nombreEstudiante, direccion, correoElectronico, telefono, idCarrera }: ICreateEstudiante = req.body;
        
        const estudianteCrear: ICreateEstudiante = {
            nombreEstudiante,
            direccion,
            correoElectronico,
            telefono,
            idCarrera
        };

        const estudiante = await srvCreateEstudiante(estudianteCrear);

        res.status(201).json(estudiante);
    } catch (error) {
        console.log('Error al crear el estudiante: ' + error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

// OBTENER TODOS LOS ESTUDIANTES
export const getEstudiantes = async (req: Request, res: Response) => {
    try {
        const estudiantes = await srvGetEstudiantes();
        res.status(200).json(estudiantes);
    } catch (error) {
        console.log('Error al obtener los estudiantes: ' + error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

// OBTENER UN ESTUDIANTE POR ID
export const getEstudiante = async (req: Request, res: Response) => {
    try {
        const { idEstudiante } = req.params;
        const estudiante = await srvGetEstudianteById(+idEstudiante);

        if (!estudiante) {
            res.status(404).json({ message: 'Estudiante no encontrado' });
        }

        res.status(200).json(estudiante);
    } catch (error) {
        console.log('Error al obtener el estudiante: ' + error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

// ACTUALIZAR UN ESTUDIANTE
export const updateEstudiante = async (req: Request, res: Response) => {
    try {
        const { idEstudiante } = req.params;
        const { nombreEstudiante, direccion, correoElectronico, telefono, idCarrera } = req.body;

        const estudianteActualizar = {
            idEstudiante: +idEstudiante,
            nombreEstudiante,
            direccion,
            correoElectronico,
            telefono,
            idCarrera
        };

        const estudiante = await srvUpdateEstudiante(estudianteActualizar);

        res.status(200).json(estudiante);
    } catch (error) {
        console.log('Error al actualizar el estudiante: ' + error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

// ELIMINAR UN ESTUDIANTE
export const deleteEstudiante = async (req: Request, res: Response) => {
    try {
        const { idEstudiante } = req.params;
        await srvDeleteEstudiante(+idEstudiante);
        res.status(200).json({ message: 'Estudiante eliminado' });
    } catch (error) {
        console.log('Error al eliminar el estudiante: ' + error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

