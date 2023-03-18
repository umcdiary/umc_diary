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

export const selectpaperIDs = async(conn,userId,firstDay,currentDay,AlbumId)=>{
    const selectpaperIDsQuery = `select paperID,paper.created_at  from paper inner join User on paper.userID = User.id where AlbumId=${AlbumId} and User.id = ${userId} and (paper.created_at) between "${firstDay}" and "${currentDay}";`;
    const [selectpaperIDsRow]=await conn.query(selectpaperIDsQuery);
    return selectpaperIDsRow

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

export const insertKeywords = async(conn,paperID,keyword)=>{
    const insertKeywordsQuery =`insert into PlusKeywors(pluskeywordsname, paperid) values("${keyword}",${paperID});`;
    const insertKeywordsRow = await conn.query(insertKeywordsQuery);
    return insertKeywordsRow;

}

export const insertDefaultAlbum=async(conn,userId,albumname)=>{
    const insertDefaultAlbumQuery = `insert into Album(albumname,userId) values("${albumname}",${userId});`;
    const insertDefaultAlbumRow = await conn.query(insertDefaultAlbumQuery);
    return insertDefaultAlbumRow;

}

export const selectNewpaperID = async(conn,userId,AlbumId)=>{
    const selectpaperIDQuery =`select paperID from paper where userId=${userId} and AlbumId=${AlbumId} order by created_at desc Limit 1;`;
    const [selectpaperIDRow] = await conn.query(selectpaperIDQuery)
    return selectpaperIDRow;
}

export const selectKeyword = async(conn,paperID)=>{
    const selectKeywordQuery = `select PlusKeywordsName from PlusKeywors where paperID = ${paperID};`;
    const [selectKeywordRow] = await conn.query(selectKeywordQuery);
    return selectKeywordRow;

}

export const selectCurrentAlbumState= async(conn,userId)=>{
    const selectCurrentAlbumStateQuery =`select currentAlbumId from User where id=?;`;
    const [selectCurrentAlbumStateRow] = await conn.query(selectCurrentAlbumStateQuery,userId);
    return selectCurrentAlbumStateRow;
}

export const insertcreateCurrentAlbumState=async(conn,AlbumId,userId)=>{
    const insertcreateCurrentAlbumStateQuery = `update User set currentAlbumId = ${AlbumId} where id = ${userId};`;
    const insertcreateCurrentAlbumStateRow = await conn.query(insertcreateCurrentAlbumStateQuery);
    return insertcreateCurrentAlbumStateRow
}
export const selectAlbumId = async(conn,userId)=>{

    const selectAlbumIdQuery = `select AlbumId from Album where userId = ? order by created_at DESC  Limit 1;`;
    const [selectAlbumIdRow] = await conn.query(selectAlbumIdQuery,userId);
    return selectAlbumIdRow; 
        

}

export const selectpaperIdByDay = async(conn,userId,AlbumId,date) =>{
    const selectpaperIdByDayQuery =`select paperID from paper where userId=${userId} and AlbumId=${AlbumId} and Date(created_at)="${date}";`;
    const [selectpaperIdByDayRow] = await conn.query(selectpaperIdByDayQuery);
    return selectpaperIdByDayRow;
}