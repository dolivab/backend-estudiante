import { AppDataSource } from "../config/db";
import { Prueba } from "../entities/Prueba.entity";

const pruebaRepository = AppDataSource.getRepository(Prueba);

export const srvGetPruebas = async () => {
    
    return await pruebaRepository.find();

}

export const srvGetPrueba = async (id: number) => {

    return await pruebaRepository.findOne({
        where: { idPrueba: id }
    });

}

export const srvCreatePrueba = async (nombre: string) => {

    const prueba = new Prueba();

    prueba.nombre = nombre;

    return await pruebaRepository.save(prueba);

}

export const srvUpdatePrueba = async (id: number, nombre: string) => {

    const prueba = await pruebaRepository.findOne({
        where: { idPrueba: id }
    });

    if(!prueba) return null;

    prueba.nombre = nombre;

    return await pruebaRepository.save(prueba);

}

export const srvDeletePrueba = async (id: number) => {

    const prueba = await pruebaRepository.findOne({
        where: { idPrueba: id }
    });

    if(!prueba) return null;

    return await pruebaRepository.remove(prueba);

}