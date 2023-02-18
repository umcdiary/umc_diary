
export const selectUserByEmail = async(connection, email) =>{
    const sql = `select Id, email, profileImage from User where email = '${email}';`;
    const result = await connection.query(sql);
    return result[0];
}

export const insertUser = async(connection,nickname,email,profile)=>{

    const insertUsersql = `insert into User(nickname,email,profileImage) values('${nickname}','${email}','${profile}');`;
    const insertUserResult = await connection.query(insertUsersql);
    return insertUserResult;
}