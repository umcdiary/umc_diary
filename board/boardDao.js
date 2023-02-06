/*export const insertForm = async(conn,insertFormParams) =>{
    const insertFormQuery = `insert into board(id,user_id,ranks,description) values(?,?,?,?);`;

    const insertFormRow = await conn.query(
        insertFormQuery,insertFormParams
    )

    return insertFormRow;

}

export const selectForm = async(conn) =>{
    const selectFormQuery = `select * from board;`;

    const [selectFormRow] = await conn.query(selectFormQuery);
    return selectFormRow;
}

export const updateForm = async(conn,updateFormParams)=>{
    const updateFormQuery = `UPDATE board set ranks=?,description=? WHERE id=?;`;

    const updateFormRow = await conn.query(
        updateFormQuery, updateFormParams
    )

    return updateFormRow;

} 

export const deleteForm = async(conn,id)=>{
    const deleteFormQuery =`DELETE FROM board WHERE id=?;`;

    const deleteFormRow = await conn.quer(
        deleteFormQuery,deleteFormParams
    )

    return deleteFormRow;

}*/