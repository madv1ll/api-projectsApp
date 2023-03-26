import{ config as dotenv} from 'dotenv';
dotenv();
export const config ={
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_DATABASE || 'test',
    port: process.env.DB_PORT || 3306,
    ssl: true
}