import pool from "../config/database"
import { selectUserByEmail } from "./loginDao"

export const findUser = async(email) =>{
    const connection = await pool.getConnection(async conn => conn)

    const result = await selectUserByEmail(connection, email);

    return result
}

