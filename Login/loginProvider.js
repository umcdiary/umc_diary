import pool from "../config/database"
import { insertUser,selectUserByID } from "./loginDao"

export const findUser = async(K_ID) =>{
    const connection = await pool.getConnection(async conn => conn)

    const result = await selectUserByID(connection, K_ID);
    
    connection.release();
    return result
}

export const AddUser = async(nickname,profile,K_ID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);

    const AddUserresult = await insertUser(connection,nickname,profile,K_ID);
    connection.release();
    return AddUserresult
}