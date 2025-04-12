
// Generame una entidad de typeorm en base al siguiente DDL
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Carrera } from './Carrera.entity';

@Entity('estudiante')
export class Estudiante {
    @PrimaryGeneratedColumn({ name: 'id_estudiante' })
    idEstudiante: number;

    @Column({ name: 'nombre_estudiante', type: 'varchar', length: 100 })
    nombreEstudiante: string;

    @Column({ name: 'direccion', type: 'varchar', length: 100 })
    direccion: string;

    @Column({ name: 'correo_electronico', type: 'varchar', length: 100 })
    correoElectronico: string;

    @Column({ name: 'telefono', type: 'varchar', length: 100, nullable: true })
    telefono?: string;

    @ManyToOne(() => Carrera, (carrera) => carrera.estudiantes)
    carrera: Carrera;
}