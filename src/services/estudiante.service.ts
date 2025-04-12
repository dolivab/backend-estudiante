
import { AppDataSource } from '../config/db';

import { Estudiante } from '../entities/Estudiante.entity';
import { Carrera } from '../entities/Carrera.entity';
import { ICreateEstudiante, IUpdateEstudiante } from '../interfaces/interfaces';

const estudianteRepository = AppDataSource.getRepository(Estudiante);
const carreraRepository = AppDataSource.getRepository(Carrera);

// Crear un estudiante
export const srvCreateEstudiante = async (estudiante: ICreateEstudiante) => {
    const nuevoEstudiante = new Estudiante();

    nuevoEstudiante.nombreEstudiante = estudiante.nombreEstudiante;
    nuevoEstudiante.direccion = estudiante.direccion;
    nuevoEstudiante.correoElectronico = estudiante.correoElectronico;
    nuevoEstudiante.telefono = estudiante.telefono;

    // Obtener la carrera por ID
    const carrera = await carreraRepository.findOne({
        where: { idCarrera: estudiante.idCarrera },
    });

    // Validar si la carrera existe
    if (!carrera) {
        throw new Error('Carrera no encontrada');
    }

    nuevoEstudiante.carrera = carrera;

    return estudianteRepository.save(nuevoEstudiante);
}

// Obtener todos los estudiantes
export const srvGetEstudiantes = async () => {
    return await estudianteRepository.find({
        relations: ['carrera'],
    });
}

// Obtener un estudiante por ID
export const srvGetEstudianteById = async (id: number) => {
    return await estudianteRepository.findOne({
        where: { idEstudiante: id },
        relations: ['carrera'],
    });
}

// Actualizar un estudiante
export const srvUpdateEstudiante = async (estudiante: IUpdateEstudiante) => {

    // Obtener un estudiante por ID
    const estudianteObtenido = await srvGetEstudianteById(estudiante.idEstudiante);

    if (!estudianteObtenido) {
        throw new Error('Estudiante no encontrado');
    }

    // Actualizar los campos
    estudianteObtenido.nombreEstudiante = estudiante.nombreEstudiante;
    estudianteObtenido.direccion = estudiante.direccion;
    estudianteObtenido.correoElectronico = estudiante.correoElectronico;
    estudianteObtenido.telefono = estudiante.telefono;

    // Guardar los cambios
    return await estudianteRepository.save(estudianteObtenido);

}

// Eliminar un estudiante
export const srvDeleteEstudiante = async (id: number) => {
    // Obtener un estudiante por ID
    const estudiante = await srvGetEstudianteById(id);

    if (!estudiante) {
        throw new Error('Estudiante no encontrado');
    }

    // Eliminar el estudiante
    await estudianteRepository.remove(estudiante);

    return { message: 'Estudiante eliminado' };
}


