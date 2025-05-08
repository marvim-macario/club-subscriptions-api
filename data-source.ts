import 'dotenv/config';
import { DataSource } from 'typeorm';

// Configuração do DataSource
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT ?? '5432'),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: false, // Desabilitado em produção
  logging: true,
  migrations: ['migrations/**/*.ts'], // Caminho para as migrations
});
