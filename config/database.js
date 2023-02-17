require("dotenv").config();
import mysql from "mysql2/promise"

const pool = mysql.createPool({
    host: 'database-1.chaspj4xm3hk.ap-northeast-2.rds.amazonaws.com',
    user:'root',
    port: '3306',
    password: '58859476',
    database: 'diary'
});

export default pool;