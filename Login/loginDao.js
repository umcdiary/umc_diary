
export const selectUserByEmail = async(connection, email) =>{
    const sql = `select Id from User where email = '${email}';`;
    console.log(sql)
    const result = await connection.query(sql);
    return result[0];
}