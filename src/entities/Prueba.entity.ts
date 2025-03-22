import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'prueba' })
export class Prueba {

    @PrimaryGeneratedColumn({ name: 'id_prueba' })
    idPrueba: number;

    @Column({ nullable: false })
    nombre: string;

}