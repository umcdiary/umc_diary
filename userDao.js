export const selectUserByNickname = async(connection, userId) =>{
  const sql = `select nickname, email from user where Id = '${userId}';`
  const result = await connection.query(sql);
  return result[0]
}