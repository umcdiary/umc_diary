export const updateNickname = async (conn, updateNicknameParams) => {
    const updateNicknameQuery = `Update User set nickname = ? where id = ?;`;
    const updateNicknameResult = await conn.query(
        updateNicknameQuery,
        updateNicknameParams
    );
    return updateNicknameResult;
};

export const deleteUser = async (conn, deleteUserParams) => {
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
