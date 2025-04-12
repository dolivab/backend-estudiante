import 'reflect-metadata'
import { DataSource } from 'typeorm'

import dotenv from 'dotenv';

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    ssl: { rejectUnauthorized: false },
    entities: [isProd ? 'dist/entities/**/*.js' : 'src/entities/*.ts']
})

export const connectDB = async () => {
    try {
        await AppDataSource.initialize()
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log(process.env.DB_HOST)
        console.log(process.env.DB_PORT)
        console.log(process.env.DB_USER)
        console.log(process.env.DB_PASS)
        console.log(process.env.DB_NAME)

        console.log('Error al conectar a la base de datos', error)
    }
}