import pool from '../config/database';
import {
    selectbookmarks,
    updatebookmark2,
    selectalbums,
    selectpaper,
    insertalbum,
    insertPaper,
    updatebookmark,
} from './albumDao';

export const createalbum = async (UserID) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const createalbumresult = await insertalbum(connection, UserID);
    connection.release();
    return createalbumresult;
};

export const retrievpaper = async (Albumid) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const retrievpaperresult = await selectpaper(connection, Albumid);

    return retrievpaperresult;
};

export const retrievalbums = async (UserID) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const retrievalbumsresult = await selectalbums(connection, UserID);
    console.log(retrievalbums);
    return retrievalbumsresult;
};

/*
export const createPaper = async()=>{

    const connection = await pool.getConnection(async(conn)=>conn);
    const createPaperResult = await insertPaper(connection);
    return createPaperResult;


}*/

export const createBookmark = async (paperID) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const createBookmarkResult = await updatebookmark(connection, paperID);
    return createBookmarkResult;
};

export const deleteBookmark = async (paperID) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const deletetBookmarkResult = await updatebookmark2(connection, paperID);
    return deletetBookmarkResult;
};

export const retrievbookmarks = async (Albumid) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const retrievbookmarksResult = await selectbookmarks(connection, Albumid);
    return retrievbookmarksResult;
};

export const addUserAlbum = async function (albumId, userList) {
    const connection = await pool.getConnection(async (conn) => conn);

    const findAlbumQuery = `
        SELECT *
        FROM Album
        WHERE AlbumId = ?;
        `;
    let result = await connection.query(findAlbumQuery, albumId);
    console.log(result[0][0]);

    let group = result[0][0].group;
    if (group == null) {
        group = [];
    }

    userList.forEach(async function (user) {
        group.push(user);

        const findUserQuery = `
            SELECT *
            FROM User
            WHERE email = ?;
            `;
        let result = await connection.query(findUserQuery, user);
        console.log(result[0][0]);
        let album = result[0][0].album;

        if (album == null) {
            album = [];
        }
        album.push(albumId);
        album = Array.from(new Set(album));

        const updateUserQuery = `
            UPDATE User
            SET album = ?
            WHERE email = ?;
            `;

        result = await connection.query(updateUserQuery, [
            JSON.stringify(album),
            user,
        ]);

        return result[0][0];
    });

    group = Array.from(new Set(group));

    const updateAlbumQuery = `
        UPDATE Album
        SET users = ?
        WHERE AlbumId = ?;
        `;

    result = await connection.query(updateAlbumQuery, [
        JSON.stringify(group),
        albumId,
    ]);

    return true;
};

export const updateAlbumColor = async function (albumId, color) {
    const connection = await pool.getConnection(async (conn) => conn);

    const updateAlbumQuery = `
        UPDATE Album
        SET albumColor = ?
        WHERE AlbumId = ?;
        `;

    await connection.query(updateAlbumQuery, [color, albumId]);
    connection.release();
    return true;
};
