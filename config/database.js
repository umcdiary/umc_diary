require('dotenv').config();
import mysql from 'mysql2/promise';
const env = process.env;

const pool = mysql.createPool({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USERNAME,
    port: env.MYSQL_PORT,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
});

export default pool;
