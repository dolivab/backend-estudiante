import { Response, Request } from "express";
import { srvGetPruebas, srvGetPrueba, srvCreatePrueba, srvUpdatePrueba, srvDeletePrueba } from "../services/prueba.service"



export const getPruebas = async (req: Request, res: Response) => {

    try {
        
        const pruebas = await srvGetPruebas();

        res.status(200).json(pruebas);

    } catch (error) {
        console.log(error)
    }

}


export const getPrueba = async (req: Request, res: Response) => { 

    try {
        
        const { id } = req.params;

        const prueba = await srvGetPrueba(Number(id));

        if(!prueba) res.status(404).json({message: 'Prueba no encontrada'});

        res.status(200).json(prueba);

    } catch (error) {
        console.log(error)
    }

}

export const createPrueba = async (req: Request, res: Response) => {

    try {
        
        const { nombre } = req.body;

        const prueba = await srvCreatePrueba(nombre);

        res.status(201).json(prueba);

    } catch (error) {
        console.log(error)
    }

}

export const updatePrueba = async (req: Request, res: Response) => {

    try {
        
        const { id } = req.params;
        const { nombre } = req.body;

        const prueba = await srvUpdatePrueba(Number(id), nombre);

        if(!prueba) res.status(404).json({message: 'Prueba no encontrada'});

        res.status(200).json(prueba);

    } catch (error) {
        console.log(error)
    }

}

export const deletePrueba = async (req: Request, res: Response) => {

    try {
        
        const { id } = req.params;

        const prueba = await srvDeletePrueba(Number(id));

        if(!prueba) res.status(404).json({message: 'Prueba no encontrada'});

        res.status(200).json(prueba);

    } catch (error) {
        console.log(error)
    }

}