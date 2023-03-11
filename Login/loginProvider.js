import pool from "../config/database"
import { insertUser,selectUserByEmail } from "./loginDao"

export const findUser = async(profile) =>{
    const connection = await pool.getConnection(async conn => conn)

    const result = await selectUserByEmail(connection, profile);

    return result
}

export const AddUser = async(nickname,email,profile)=>{

    const connection = await pool.getConnection(async(conn)=>conn);

    const AddUserresult = await insertUser(connection,nickname,email,profile);
    return AddUserresult
}