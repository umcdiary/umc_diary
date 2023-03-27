
export const selectUserByID = async(connection, K_ID) =>{
    const sql = `select Id, profileImage from User where K_ID = "${K_ID}";`;
    const result = await connection.query(sql);
    return result[0];
}

export const insertUser = async(connection,nickname,profile,K_ID)=>{

    const insertUsersql = `insert into User(nickname,profileImage,K_ID) values('${nickname}','${profile}',"${K_ID}");`;
    const insertUserResult = await connection.query(insertUsersql);
    return insertUserResult;
}

export const selectKid = async(connection,Kid)=>{

    const selectKidQuery =`select K_ID from User where K_ID="${Kid}";`;
    const [selectKidRow] = await connection.query(selectKidQuery);
    return selectKidRow; 
}