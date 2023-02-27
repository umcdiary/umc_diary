export const selectpaper = async (conn, Albumid) => {
    const selectpaperQuery = `select * from paper where Albumid = ?;`;
    const [selectpaperRow] = await conn.query(selectpaperQuery, Albumid);
    return selectpaperRow;
};

export const selectalbums = async (conn, UserID) => {
    const selectalbumsQuery = `select * from album WHERE UserID = ?;`;
    const [selectalbumsRow] = await conn.query(selectalbumsQuery, UserID);
    console.log(selectalbumsRow);
    return selectalbumsRow;
};

export const insertalbum = async (conn, insertalbumParams) => {
    const insertalbumQuery = `insert into Album(UserID) value(?);`;
    const insertalbumRow = await conn.query(
        insertalbumQuery,
        insertalbumParams
    );
    const insertPaperQuery = `insert into Paper(Albumid) value(last_insert_id());`;
    const insertPaperRow = await conn.query(insertPaperQuery);
    console.log(insertPaperRow);
    return insertalbumRow;
};

export const insertPwd = async (conn, insertPwdParams) => {
    const insertpwdQuery = `Update Album set albumPassword = ? where albumid = ?;`;
    const insertPwdRow = await conn.query(insertpwdQuery, insertPwdParams);
    return insertPwdRow;
};

export const updatebookmark = async (conn, paperID) => {
    const updatebookmarkQuery = `update paper set bookmark = 1 where paperID = ?;`;
    const updatebookmarkRow = await conn.query(updatebookmarkQuery, paperID);
    console.log('bookmark sucess');
    return updatebookmarkRow;
};

export const updatebookmark2 = async (conn, paperID) => {
    const deletebookmarkQuery = `update paper set bookmark = 0 where paperID = ?;`;
    const deletebookmarkRow = await conn.query(deletebookmarkQuery, paperID);
    console.log('bookmark delete sucess');
    return deletebookmarkRow;
};

export const selectbookmarks = async (conn, Albumid) => {
    const selectbookmarksQuery = `select * from paper where Albumid = ? and bookmark = 1;`;
    const [selectbookmarksRow] = await conn.query(
        selectbookmarksQuery,
        Albumid
    );
    return selectbookmarksRow;
};

export const selectemoge = async (conn, emogeID) => {
    const selectemogeQuery = `select emogeImage from emoge where emogeID = ?;`;
    const [selectemogeRow] = await conn.query(selectemogeQuery, emogeID);
    return selectemogeRow;
};

export const selectname = async (conn, AlbumId) => {
    const selectnameQuery = `select albumname from Album where AlbumId = ?;`;
    const [selectnameRow] = await conn.query(selectnameQuery, AlbumId);
    return selectnameRow;
};

export const updatename = async (conn, albumname, AlbumId) => {
    const updatenameQuery = `update Album set albumname ="?" where AlbumId = 11;`;
    const [updatenameRow] = await conn.query(
        updatenameQuery,
        albumname,
        AlbumId
    );
    return updatenameRow;
};

export const createAlbumUser = async (conn, createAblumUserParams) => {
    const createAlbumUserQuery = `INSERT IGNORE INTO Album_User(albumId, userId) VALUES (?, ?);`;
    const createAlbumUserResult = await conn.query(
        createAlbumUserQuery,
        createAblumUserParams
    );
    return createAlbumUserResult;
};

export const selectUserByEmail = async (conn, email) => {
    const selectUserByEmailQuery = `SELECT * FROM User WHERE email = ?;`;
    const selectUserByEmailResult = await conn.query(
        selectUserByEmailQuery,
        email
    );
    return selectUserByEmailResult;
};
