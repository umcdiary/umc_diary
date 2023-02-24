import baseResponse from '../config/baseResponseStatus';
import { errResponse, SUCCESSResponse } from '../config/response';
import { updateNickname, deleteUser } from './userDao';
import pool from '../config/database';

export const editNickname = async (userId, nickname) => {
    try {
        const updateNicknameParams = [nickname, userId];
        const connection = await pool.getConnection(async (conn) => conn);
        const editNicknameResult = await updateNickname(
            connection,
            updateNicknameParams
        );
        connection.release();
        return editNicknameResult;
    } catch (err) {
        console.log(err);
        return errResponse(baseResponse.DB_ERROR);
    }
};

export const removeUser = async (userId) => {
    try {
        const deleteUserParams = [userId];
        const connection = await pool.getConnection(async (conn) => conn);
        const deleteUserResult = await deleteUser(connection, deleteUserParams);
        connection.release();
        return deleteUserResult;
    } catch (err) {
        console.log(err);
        return errResponse(baseResponse.DB_ERROR);
    }
};
