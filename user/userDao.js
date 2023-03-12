export const updateNickname = async (conn, updateNicknameParams) => {
    const updateNicknameQuery = `Update User set nickname = ? where id = ?;`;
    const updateNicknameResult = await conn.query(
        updateNicknameQuery,
        updateNicknameParams
    );
    return updateNicknameResult;
};

export const deleteUser = async (conn, deleteUserParams) => {
    const deleteAlbumQuery = `Delete from Album_User where userId = ?;`;
    const deleteAlbumResult = await conn.query(
        deleteAlbumQuery,
        deleteUserParams
    );
    const deleteEmptyAlbumQuery = `Delete Album FROM Album
        INNER JOIN (
                    SELECT count(*) c, 
                    albumId 
                    FROM Album_User 
                    GROUP BY albumId 
                    ) temp 
        ON Album.AlbumId = temp.albumId 
        WHERE c = 0 `;
    const deleteEmptyAlbumResult = await conn.query(deleteEmptyAlbumQuery);
    const deleteUserQuery = `Delete from User where id = ?;`;
    const deleteUserResult = await conn.query(
        deleteUserQuery,
        deleteUserParams
    );
    return deleteUserResult;
};

export const selectUser = async (conn, selectUserParams) => {
    const selectUserQuery = `SELECT * FROM User WHERE id = ?;`;
    const selctUserResult = await conn.query(selectUserQuery, selectUserParams);
    return selctUserResult;
};
