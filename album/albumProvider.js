import pool from "../config/database"
import{selectbookmarks,updatebookmark2,selectalbums,selectpaper,insertalbum,insertPaper,updatebookmark} from "./albumDao"

export const createalbum=async(UserID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const createalbumresult = await insertalbum(
        connection,UserID
    );
    connection.release();
    return createalbumresult


}

export const retrievpaper=async(Albumid)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const retrievpaperresult = await selectpaper(
        connection,Albumid
    );

    return retrievpaperresult


}

export const retrievalbums=async(UserID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const retrievalbumsresult = await selectalbums(
        connection,UserID
    );
    console.log(retrievalbums);
    return retrievalbumsresult


}

/*
export const createPaper = async()=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const createPaperResult = await insertPaper(connection);
    return createPaperResult;


}*/

export const createBookmark=async(paperID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const createBookmarkResult = await updatebookmark(connection,paperID);
    return createBookmarkResult;    

}

export const deleteBookmark= async(paperID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const deletetBookmarkResult = await updatebookmark2(connection,paperID);
    return deletetBookmarkResult;  


}

export const retrievbookmarks = async(Albumid)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const retrievbookmarksResult = await selectbookmarks(connection,Albumid);
    return retrievbookmarksResult;   

}