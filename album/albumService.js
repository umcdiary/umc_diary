import baseResponse from "../config/baseResponseStatus";
import { errResponse,SUCCESSResponse } from "../config/response";
import { selectemoji,selectpaperID,insertPwd } from "./albumDao";
import pool from "../config/database";
export const createpwd=async(albumid,albumPassword)=>{
    try{
    const insertPwdParams = [albumPassword,albumid];
    const connection = await pool.getConnection(async conn=>conn);
    const createpwdResult = await insertPwd(connection,insertPwdParams);
    connection.release();
    return createpwdResult;
    }catch(err){
        console.log(err);
        return errResponse(baseResponse.DB_ERROR);
    }

}

export const makeCalendar = (date) =>{

    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth()+1;
    console.log(currentYear);
    console.log(currentMonth);
}

export const retrievepaperId =async(date,userId,AlbumId) =>{
    const connection=await pool.getConnection(async conn => conn)
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    const firstDay = `${y}-${m+1}-01`
    const currentDay =`${y}-${m+1}-${d}`
    const retrievepaperIdResult = await selectpaperID(connection,userId,firstDay,currentDay,AlbumId);
    return retrievepaperIdResult;

}

export const retrievemojies = async(getcalenderResult)=>{
    const connection = await pool.getConnection(async(conn)=>conn)
    const result = new Array();
    for(const value in getcalenderResult){
        const paperID=getcalenderResult[value].paperID;
        const createday = getcalenderResult[value].created_at
        const [retrievemojiResult] = await selectemoji(connection,paperID,createday);
        
        result.push([retrievemojiResult,createday]);
    }
    return result;
   
}