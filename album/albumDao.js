export const selectpaper= async(conn,paperID)=>{

    const selectpaperQuery= `select * from paper where paperID = ?;`;
    const [selectpaperRow] = await conn.query(
        selectpaperQuery,paperID
    );
    return selectpaperRow;
    
}

export const selectalbums = async(conn,UserID)=>{
  
    const selectalbumsQuery= `select * from Album WHERE UserID = ${UserID};`;
    const [selectalbumsRow] = await conn.query(selectalbumsQuery);
    console.log(selectalbumsRow);
    return selectalbumsRow;
    
}

export const insertalbum = async(conn,insertalbumParams)=>{

    const insertalbumQuery = `insert into Album(UserID) value(?);`;
    const insertalbumRow = await conn.query(
        insertalbumQuery,insertalbumParams
    )    
    const insertPaperQuery = `insert into Paper(Albumid) value(last_insert_id());`;
    const insertPaperRow = await conn.query(insertPaperQuery);
    console.log(insertPaperRow);
    return insertalbumRow;


}

export const insertPwd = async(conn,insertPwdParams)=>{

    const insertpwdQuery = `Update Album set albumPassword = ? where albumid = ?;`;
    const insertPwdRow = await conn.query(
        insertpwdQuery,insertPwdParams
    )
    return insertPwdRow;
}

export const updatebookmark = async(conn,paperID)=>{

    const updatebookmarkQuery = `update paper set bookmark = 1 where paperID = ?;`;
    const updatebookmarkRow = await conn.query(
        updatebookmarkQuery,paperID
    );
    console.log("bookmark sucess")
    return updatebookmarkRow;
}

export const updatebookmark2= async(conn,paperID)=>{

    const deletebookmarkQuery = `update paper set bookmark = 0 where paperID = ?;`;
    const deletebookmarkRow = await conn.query(
        deletebookmarkQuery,paperID
    );
    console.log("bookmark delete sucess")
    return deletebookmarkRow;
}

export const selectbookmarks = async(conn,Albumid)=>{

    const selectbookmarksQuery = `select * from paper where Albumid = ? and bookmark = 1;`;
    const [selectbookmarksRow] = await conn.query(
        selectbookmarksQuery,Albumid
    );
    return selectbookmarksRow;

}

export const selectemoji = async(conn,paperID,createday)=>{

    const selectemogeQuery = `select emojiID from keywords where paperID =${paperID};`;
    const [selectemogeRow] = await conn.query(
        selectemogeQuery
    );

    return selectemogeRow;

}

export const selectname = async(conn,AlbumId)=>{

    const selectnameQuery = `select albumname from Album where AlbumId = ?;`;
    const [selectnameRow] = await conn.query(
        selectnameQuery,AlbumId
    );
    console.log(selectnameRow);
    return selectnameRow;
}

export const updatename = async(conn,albumname, AlbumId)=>{

    const updatenameQuery = `update Album set albumname ="${albumname}" where AlbumId = ${AlbumId};`;
    const [updatenameRow] =await conn.query(
        updatenameQuery
    );
    return updatenameRow
}

export const insertPaper = async(conn,insertPaperParams)=>{

    const insertPaperQuery =`insert into paper(userId, AlbumId) values(?,?);`;
    const insertPaperRow = await conn.query(
        insertPaperQuery,insertPaperParams);
    return insertPaperRow;
}

export const insertFeelings = async(conn,insertFeelingsParams)=>{
    const insertFeelings = `insert into keywords(emojiID, paperID) values(?,?);`;
    const insertFeelingsRow = await conn.query(
        insertFeelings,insertFeelingsParams
    );
    return insertFeelingsRow;

}

export const selectpaperID = async(conn,userId,firstDay,currentDay,AlbumId)=>{
    const selectpaperIDQuery = `select paperID,paper.created_at  from paper inner join User on paper.userID = User.id where AlbumId=${AlbumId} and User.id = ${userId} and (paper.created_at) between "${firstDay}" and "${currentDay}";`;
    const [selectpaperIDRow]=await conn.query(selectpaperIDQuery);
    return selectpaperIDRow

}

export const updatePaperText = async(conn,paperID,paperText)=>{
    const updatePaperTextQuery = `update paper set paperText = "${paperText}" where paperID = ${paperID};`;
    const updatePaperTextRow = await conn.query(updatePaperTextQuery);
    return updatePaperTextRow;

}

export const selectPaperText = async(conn,paperID)=>{
    const selectPaperTextQuery = `select paperText from paper where paperID = ${paperID};`;
    const [selectPaperTextRow] = await conn.query(selectPaperTextQuery);
    return selectPaperTextRow;
}