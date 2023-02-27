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
        console.log(editNicknameResult[0].affectedRows);
        if (editNicknameResult[0].affectedRows == 1) {
            return SUCCESSResponse(baseResponse.SUCCESS);
        } else if (editNicknameResult[0].affectedRows == 0) {
            return errResponse(baseResponse.USER_USERID_NOT_EXIST);
        }
        connection.release();
        return editNicknameResult;
    } catch (err) {
        console.log(err);
        if (err.errno == 1062) {
            return errResponse(baseResponse.SIGNUP_REDUNDANT_NICKNAME);
        }
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
