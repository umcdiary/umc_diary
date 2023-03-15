import baseResponse from "../config/baseResponseStatus";
import { errResponse,SUCCESSResponse } from "../config/response";
import { insertKeywords,selectemoji,selectpaperIDs,insertPwd } from "./albumDao";
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
    const retrievepaperIdResult = await selectpaperIDs(connection,userId,firstDay,currentDay,AlbumId);
    connection.release();
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
    connection.release();
    return result;
   
}

export const createKeywords=async(paperID,keywordID_1,keywordID_2,keywordID_3)=>{

    try{const connection = await pool.getConnection(async(conn)=>conn);
    let result="";
    if(keywordID_1){
        const keywordIDResult = await insertKeywords(connection,paperID,keywordID_1); 
        if(keywordIDResult)
            result+="keyword1PushSUCESS__";
    }
    if(keywordID_2){
        const keywordIDResult = await insertKeywords(connection,paperID,keywordID_2); 
        if(keywordIDResult)
            result+="keyword2PushSUCESS__";
    }
    if(keywordID_3){
        const keywordIDResult = await insertKeywords(connection,paperID,keywordID_3); 
        if(keywordIDResult)
            result+="keyword3PushSUCESS__";
    }
    
    connection.release();
    return result;
}catch(err){
    console.log(err);
}
}