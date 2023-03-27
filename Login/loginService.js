import pool from "../config/database";
import {selectKid}from"./loginDao";
export const retrieveKid = async(Kid)=>{
    const connection = await pool.getConnection(async(conn)=>conn);
    const retrieveKidResult = await selectKid(connection,Kid);
    connection.release();
    return retrieveKidResult;


}