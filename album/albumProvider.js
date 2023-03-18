import pool from "../config/database"
import{insertcreateCurrentAlbumState,selectAlbumId,
    selectCurrentAlbumState,insertDefaultAlbum,
    selectKeyword,selectPaperText,updatePaperText,
    selectemoji,insertFeelings,updatename,
    selectname,selectemoge,selectbookmarks,
    updatebookmark2,selectalbums,selectpaper,
    insertalbum,insertPaper,updatebookmark,
     selectpaperID,selectpaperIDs,selectpaperIdByDay} from "./albumDao"

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

export const createDefaultAlbum=async(userId,albumname)=>{
    const connection = await pool.getConnection(async(conn)=>conn);
    const createDefaultAlbumResult  = await insertDefaultAlbum(connection,userId,albumname);
    return createDefaultAlbumResult;
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
    
    try{const connection = await pool.getConnection(async conn =>conn);
    const createPaperTextResult = await updatePaperText(connection,paperID,paperText);
    connection.release();
    return createPaperTextResult;
    }catch(err){
        console.log(err);
    }
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

export const retrieveNewpaperID = async(userId,AlbumId)=>{
    
    try{const connection = await pool.getConnection(async(conn)=>conn);
    const retrieveNewPaperIDResult = await selectpaperID(connection,userId,AlbumId);
    connection.release();
    return retrieveNewPaperIDResult;
    }catch(err){
        console.log(err);
    }
}
export const retrivePaperIdByDay=async(userId,AlbumId,date)=>{
    try{const connection = await pool.getConnection(async(conn)=>conn);
        const retrivePaperIdByDayResult = await selectpaperIdByDay(connection,userId,AlbumId,date);
        connection.release();
        return retrivePaperIdByDayResult;
        }catch(err){
            console.log(err);
        }
};
export const retrieveKeyword = async(paperID)=>{

    try{
        const connection = await pool.getConnection(async(conn)=>conn);
        const retrieveKeywordResult = await selectKeyword(connection,paperID);
        connection.release();
        return retrieveKeywordResult;

    }catch(err){
        console.log(err);
    }
}

export const retriveAlbumId = async(userId)=>{
    try{
        const connection = await pool.getConnection(async(conn)=>conn);
        const retrieveAlbumIdResult = await selectAlbumId(connection,userId);
        connection.release();
        return retrieveAlbumIdResult;

    }catch(err){
        console.log(err);
    }
}

export const retriveCurrentAlbumState = async(userId)=>{

    try{
        const connection = await pool.getConnection(async(conn)=>conn);
        const retriveCurrentAlbumStateResult = await selectCurrentAlbumState(connection,userId);
        connection.release();
        return retriveCurrentAlbumStateResult;

    }catch(err){
        console.log(err);
    }
}

export const createCurrentAlbumState = async(AlbumId,userId)=>{
    try{
        const connection = await pool.getConnection(async(conn)=>conn);
        const createCurrentAlbumStateResult = await insertcreateCurrentAlbumState(connection,AlbumId,userId);
        connection.release();
        return createCurrentAlbumStateResult;

    }catch(err){
        console.log(err);
    }
}