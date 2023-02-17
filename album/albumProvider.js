import pool from "../config/database"
import{updatename,selectname,selectemoge,selectbookmarks,updatebookmark2,selectalbums,selectpaper,insertalbum,insertPaper,updatebookmark} from "./albumDao"

export const createalbum=async(UserID)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const createalbumresult = await insertalbum(
        connection,UserID
    );
    connection.release();
    return createalbumresult


}

export const retrievpaper=async(AlbumId)=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const retrievpaperresult = await selectpaper(
        connection,AlbumId
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

export const retrievemoge = async(emogeID)=>{

    const connection = await pool.getConnection(async(conn)=>conn)
    const retrievemogeResult = await selectemoge(connection,emogeID);
    return retrievemogeResult;
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