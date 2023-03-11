import pool from "../config/database"
import{selectPaperText,updatePaperText,selectemoji,insertFeelings,updatename,selectname,selectemoge,selectbookmarks,updatebookmark2,selectalbums,selectpaper,insertalbum,insertPaper,updatebookmark} from "./albumDao"

export const createalbum=async(UserID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const createalbumresult = await insertalbum(
        connection,UserID
    );
    connection.release();
    return createalbumresult


}

export const retrievpaper=async(paperID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const retrievpaperresult = await selectpaper(
        connection,paperID
    );
    return retrievpaperresult


}

export const retrievalbums=async(UserID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const retrievalbumsresult = await selectalbums(
        connection,UserID
    );
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



export const retrievalbumname = async(AlbumId)=>{

    const connection = await pool.getConnection(async(conn)=>conn)
    const retrievalbumnameResult = await selectname(connection, AlbumId);
    return retrievalbumnameResult;
}

export const renamealbumname = async(albumname,AlbumId)=>{

    const connection = await pool.getConnection(async(conn)=>conn)
    const renamealbumnameResult = await updatename(connection,albumname,AlbumId);
    return renamealbumnameResult;
}

export const createpaper = async(userId,AlbumId)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const insertPaperParams = [userId,AlbumId];
    const createpaperResult = await insertPaper(connection,insertPaperParams);
    return createpaperResult;

}

export const createfeelings = async(userID,AlbumID)=>{
    const connection = await pool.getConnection(async(conn)=>conn);
    const insertFeelingsParams = [userID,AlbumID];
    const createfeelingsResult = await insertFeelings(connection,insertFeelingsParams);
    return createfeelingsResult;
}

export const retrievemoji = async(paperID)=>{
    const connection = await pool.getConnection(async(conn)=>conn);
    const retrievemojiResult = await selectemoji(connection,paperID);
    return retrievemojiResult

}

export const createPaperText = async(paperID,paperText)=>{
    const connection = await pool.getConnection(async conn =>conn);
    const createPaperTextResult = await updatePaperText(connection,paperID,paperText);
    return createPaperTextResult;
}

export const retrivePaperText = async(paperID)=>{
    const connection = await pool.getConnection(async conn => conn);
    const retrivePaperTextResult = await selectPaperText(connection,paperID);
    return retrivePaperTextResult
}

export const findepaper = async(paperID)=>{
    const connection = await pool.getConnection(async conn => conn);
    const findPaperResult = await selectpaper(connection,paperID);
    return findPaperResult
}