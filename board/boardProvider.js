import pool from "../config/database"
import {insertForm} from "./boardDao"


/*export const createForm =async(id,string,createdtime,fixedtime)=>{
    const conn = await pool.getConnection(async(conn)=> conn)

    const insertForm = [id,string,fixedtime];
    const createFormResult = await insertForm(conn,insertForm);
    conn.release();
    return createFormResult;

}*/