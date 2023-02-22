export const updateNickname = async (conn, updateNicknameParams) => {
    const updateNicknameQuery = `Update User set nickname = ? where id = ?;`;
    const updateNicknameResult = await conn.query(
        updateNicknameQuery,
        updateNicknameParams
    );
    return updateNicknameResult;
};
