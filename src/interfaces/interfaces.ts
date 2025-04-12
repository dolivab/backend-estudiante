
// Generame la interface para crear el estudiante

export interface ICreateEstudiante {
    nombreEstudiante: string;
    direccion: string;
    correoElectronico: string;
    telefono?: string;
    idCarrera: number;
}

export interface IUpdateEstudiante {
    idEstudiante: number;
    nombreEstudiante: string;
    direccion: string;
    correoElectronico: string;
    telefono?: string;
}
