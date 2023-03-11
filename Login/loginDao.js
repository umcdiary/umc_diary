
export const selectUserByEmail = async(connection, profile) =>{
    const sql = `select Id, profileImage from User where profileImage = "${profile}";`;
    const result = await connection.query(sql);
    return result[0];
}

export const insertUser = async(connection,nickname,profile)=>{

    const insertUsersql = `insert into User(nickname,profileImage) values('${nickname}','${profile}');`;
    const insertUserResult = await connection.query(insertUsersql);
    return insertUserResult;
}